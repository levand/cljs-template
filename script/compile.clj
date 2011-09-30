;; cx, cy, r become p, r, g. fill and stroke are fine.
;; e.g, using 'attr' works fine, the constructor functions screw it up.

(require '[cljs.closure :as closure])


(closure/build "src/cljs" {:optimizations :advanced
                           :foreign-libs [{:file "https://raw.github.com/DmitryBaranovskiy/raphael/master/raphael-min.js"
                                           :provides ["raphael"]}]
                           :output-dir "working"
                           :output-to "public/js/main.js"})