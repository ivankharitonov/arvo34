# Simple local web server for testing the website
Write-Host "Starting local web server..." -ForegroundColor Green
Write-Host ""
Write-Host "Open your browser and go to: http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Change to the script directory
Set-Location $PSScriptRoot

# Try Python first, then Node.js
if (Get-Command python -ErrorAction SilentlyContinue) {
    python -m http.server 8000
} elseif (Get-Command node -ErrorAction SilentlyContinue) {
    npx http-server -p 8000
} else {
    Write-Host "Error: Neither Python nor Node.js found!" -ForegroundColor Red
    Write-Host "Please install Python or Node.js to run a local server." -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternatively, you can use:" -ForegroundColor Yellow
    Write-Host "  - VS Code Live Server extension" -ForegroundColor Yellow
    Write-Host "  - Any other local web server" -ForegroundColor Yellow
    pause
}

