@echo off
echo.
echo ================================================================================
echo  DEAD SEOUL - Interactive CYOA
echo  Black Mirror x Blue Bedlam x Korean Horror Romance
echo ================================================================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python not found. Please install Python 3.8+
    pause
    exit /b 1
)

REM Install dependencies
echo Installing dependencies...
pip install -r requirements.txt -q

echo.
echo Starting server...
echo.
echo Open in browser: http://127.0.0.1:5000
echo Share with her: http://[YOUR-WIFI-IP]:5000
echo Password: deadseoul
echo.
echo Press Ctrl+C to stop
echo.

python app.py
