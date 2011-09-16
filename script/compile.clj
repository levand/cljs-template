(require '[cljs.closure :as closure])

(closure/build "src/cljs" {:optimizations :simple
                           :output-dir "working"
                           :output-to "public/js/main.js"})