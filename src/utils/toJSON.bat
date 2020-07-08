SET mypath=%~dp0
@echo off
python %~dp0textToJSONArray.py C:\Musseffect.github.io\src\utils\example.txt %~dp0jsonResult.json %*
pause
