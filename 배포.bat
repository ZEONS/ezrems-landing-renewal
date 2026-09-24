@echo off
chcp 65001 > nul
echo ========================================================
echo   ezREMS 랜드마크 이미지 자동 동기화 및 홈페이지 배포 도구
echo ========================================================
echo.
echo [1/3] 랜드마크 이미지 폴더 스캔 및 동기화 진행 중...
node "%~dp0sync-landmarks.js"
if %errorlevel% neq 0 (
    echo ❌ 동기화 중 오류가 발생했습니다.
    pause
    exit /b %errorlevel%
)

echo.
echo [2/3] 변경 사항을 GitHub에 커밋 및 배포 중...
git add .
git commit -m "update: 랜드마크 이미지 갱신 및 자동 동기화"
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ GitHub 푸시 중 문제가 발생했습니다. 네트워크 또는 권한을 확인해주세요.
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================================
echo  ✅ 홈페이지에 배포가 성공적으로 완료되었습니다!
echo  🌐 배포 주소: https://zeons.github.io/ezrems-landing-renewal/
echo  💡 1~2분 후 브라우저에서 'Ctrl + Shift + R'로 확인하세요.
echo ========================================================
echo.
echo 창을 닫으려면 아무 키나 누르세요...
pause > nul
