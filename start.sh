#!/bin.sh

ps -aux | grep "jekyll" | grep -v "grep" | awk '{print $2}' | while read line;  
do  
    kill -9 $line  
done

bundle exec jekyll serve --port 8080 --host 0.0.0.0 &

