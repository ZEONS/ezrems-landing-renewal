@echo off
chcp 65001 > nul
echo ========================================================
echo  ezREMS 랜드마크 이미지 자동 동기화 도구
echo ========================================================
echo.
node "%~dp0sync-landmarks.js"
echo.
echo 완료되었습니다. 창을 닫으려면 아무 키나 누르세요.
pause > nul
