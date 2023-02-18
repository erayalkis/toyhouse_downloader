#!/usr/bin/env sh

BLUE='\033[0;34m'
L_BLUE='\033[1;34m'
GREEN='\033[0;32m'
L_GREEN='\033[1;32m'
RED='\033[0;31m'
L_RED='\033[1;31m'
NC='\033[0m'

# echo "debug test"
# echo "[ ${BLUE}INFO${NC} ] INFO"
# echo "[ ${GREEN}OK${NC} ] OK"
# echo "[ ${RED}ERR${NC} ] ERROR"
# set -e

printf "\n[ ${BLUE}INFO${NC} ] STARTING BUILDING PROCESS\n"

npm run build && printf "\n[ ${GREEN}OK${NC} ] BUILD COMPLETE\n"

printf "\n[ ${BLUE}INFO${NC} ] PUSHING GIT SUBTREE\n"

git add dist
git commit -m 'Add dist subtree'
git subtree push --prefix dist origin gh-pages

printf "\n[ ${GREEN}OK${NC} ] PUSH SUCCESSFUL\n"

printf "\n[ ${BLUE}INFO${NC} ] VISIT https://erayalkis.github.io/toyhouse_downloader TO VIEW THE CHANGES\n"
printf "[ ${BLUE}INFO${NC} ] (MAY TAKE A COUPLE OF MINUTES TO UPDATE)\n"