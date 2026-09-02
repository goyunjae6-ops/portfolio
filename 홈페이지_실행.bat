@echo off
cd /d "%~dp0"

if not exist node_modules (
  echo 처음 실행이라 필요한 패키지를 설치합니다...
  call npm install
)

echo 홈페이지를 실행합니다. 잠시 후 브라우저가 자동으로 열립니다...
call npm run dev -- --open

pause
