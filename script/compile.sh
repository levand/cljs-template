#!/bin/bash


CP=''
CP=$CP:$CLOJURESCRIPT_HOME/lib/*
CP=$CP:$CLOJURESCRIPT_HOME/src/clj
CP=$CP:$CLOJURESCRIPT_HOME/src/cljs

DIR=`dirname $0`

java -server -cp $CP clojure.main $DIR/compile.clj