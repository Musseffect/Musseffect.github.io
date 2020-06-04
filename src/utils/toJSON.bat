SET mypath=%~dp0
@echo off
python %~dp0textToJSONArray.py C:\plans\links.txt %~dp0jsonResult.txt %*
pause
