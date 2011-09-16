(ns template.hello
  (:require [goog.dom :as dom]))

(defn init []
  (js/alert "Hello!")
  (def paper (js/Raphael. 10 50 320 200))

  (def circle (. paper (circle 50 40 10)))

  (. circle (attr "fill" "#f00"))
  (. circle (attr "stroke" "#00f")))
