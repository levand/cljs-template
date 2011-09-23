(require '[cljs.closure :as closure])

(closure/build "src/cljs" {:optimizations :advanced
                           :output-dir "working"
                           :output-to "public/js/main.js"})