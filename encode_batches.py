# -*- coding: utf-8 -*-
deploy_content = """@echo off
title ezREMS 랜드마크 이미지 자동 동기화 및 배포
echo ========================================================
echo   ezREMS 랜드마크 이미지 자동 동기화 및 홈페이지 배포
echo ========================================================
echo.
echo [1/3] 랜드마크 이미지 폴더 스캔 및 동기화 진행 중...
node "%~dp0sync-landmarks.js"
if %errorlevel% neq 0 (
    echo.
    echo [오류] 동기화 중 문제가 발생했습니다.
    pause
    exit /b %errorlevel%
)

echo.
echo [2/3] 변경 사항을 GitHub에 커밋 및 배포 중...
git add .
git commit -m "update: 랜드마크 이미지 갱신 및 자동 배포"
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo [오류] GitHub 푸시 중 문제가 발생했습니다.
    echo 네트워크 연결 또는 권한을 확인해주세요.
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================================
echo  [성공] 홈페이지에 배포가 완료되었습니다!
echo  배포 주소: https://zeons.github.io/ezrems-landing-renewal/
echo  약 1~2분 후 브라우저에서 'Ctrl + Shift + R'로 확인하세요.
echo ========================================================
echo.
echo 창을 닫으려면 아무 키나 누르세요...
pause > nul
"""

sync_content = """@echo off
title ezREMS 랜드마크 이미지 자동 동기화
echo ========================================================
echo   ezREMS 랜드마크 이미지 자동 동기화 도구
echo ========================================================
echo.
node "%~dp0sync-landmarks.js"
echo.
echo 완료되었습니다. 창을 닫으려면 아무 키나 누르세요.
pause > nul
"""

# Write files in Korean Windows CP949 ANSI encoding
with open("배포.bat", "w", encoding="cp949", newline="\r\n") as f:
    f.write(deploy_content)

with open("deploy.bat", "w", encoding="cp949", newline="\r\n") as f:
    f.write(deploy_content)

with open("sync-landmarks.bat", "w", encoding="cp949", newline="\r\n") as f:
    f.write(sync_content)

print("Successfully written 배포.bat, deploy.bat, sync-landmarks.bat in CP949 encoding.")
