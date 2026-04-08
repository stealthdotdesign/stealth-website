#!/bin/bash
# Quick push to GitHub
# Usage: ./push.sh "your commit message"

MESSAGE="${1:-update}"

git add -A
git commit -m "$MESSAGE"
git push origin main
