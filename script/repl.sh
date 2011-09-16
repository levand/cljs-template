#!/bin/bash

CP=''
CP=$CP:$CLOJURE_HOME/clojure.jar
CP=$CP:$CLOJURESCRIPT_HOME/lib/*
CP=$CP:$CLOJURESCRIPT_HOME/src/clj
CP=$CP:$CLOJURESCRIPT_HOME/src/cljs

java -server -cp $CP clojure.main