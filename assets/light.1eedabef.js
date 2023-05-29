const r=`.flexlayout__layout {\r
  --color-text: black;\r
  --color-background: white;\r
  --color-base: white;\r
  --color-1: #f7f7f7;\r
  --color-2: #f0f0f0;\r
  --color-3: #e9e9e9;\r
  --color-4: #e2e2e2;\r
  --color-5: #dbdbdb;\r
  --color-6: #d4d4d4;\r
  --color-drag1: rgb(95, 134, 196);\r
  --color-drag2: rgb(119, 166, 119);\r
  --color-drag1-background: rgba(95, 134, 196, 0.1);\r
  --color-drag2-background: rgba(119, 166, 119, 0.075);\r
  --font-size: medium;\r
  --font-family: Roboto, Arial, sans-serif;\r
  --color-overflow: gray;\r
  --color-icon: gray;\r
  --color-tabset-background: var(--color-background);\r
  --color-tabset-background-selected: var(--color-1);\r
  --color-tabset-background-maximized: var(--color-6);\r
  --color-tabset-divider-line: var(--color-4);\r
  --color-tabset-header-background: var(--color-background);\r
  --color-tabset-header: var(--color-text);\r
  --color-border-background: var(--color-background);\r
  --color-border-divider-line: var(--color-4);\r
  --color-tab-selected: var(--color-text);\r
  --color-tab-selected-background: var(--color-4);\r
  --color-tab-unselected: gray;\r
  --color-tab-unselected-background: transparent;\r
  --color-tab-textbox: var(--color-text);\r
  --color-tab-textbox-background: var(--color-3);\r
  --color-border-tab-selected: var(--color-text);\r
  --color-border-tab-selected-background: var(--color-4);\r
  --color-border-tab-unselected: gray;\r
  --color-border-tab-unselected-background: var(--color-2);\r
  --color-splitter: var(--color-1);\r
  --color-splitter-hover: var(--color-4);\r
  --color-splitter-drag: var(--color-4);\r
  --color-drag-rect-border: var(--color-6);\r
  --color-drag-rect-background: var(--color-4);\r
  --color-drag-rect: var(--color-text);\r
  --color-popup-border: var(--color-6);\r
  --color-popup-unselected: var(--color-text);\r
  --color-popup-unselected-background: white;\r
  --color-popup-selected: var(--color-text);\r
  --color-popup-selected-background: var(--color-3);\r
  --color-edge-marker: gray;\r
}\r
\r
.flexlayout__layout {\r
  left: 0;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  position: absolute;\r
  overflow: hidden;\r
}\r
.flexlayout__splitter {\r
  background-color: var(--color-splitter);\r
}\r
@media (hover: hover) {\r
  .flexlayout__splitter:hover {\r
    background-color: var(--color-splitter-hover);\r
    transition: background-color ease-in 0.1s;\r
    transition-delay: 0.05s;\r
  }\r
}\r
.flexlayout__splitter_border {\r
  z-index: 10;\r
}\r
.flexlayout__splitter_drag {\r
  z-index: 1000;\r
  background-color: var(--color-splitter-drag);\r
}\r
.flexlayout__splitter_extra {\r
  background-color: transparent;\r
}\r
.flexlayout__outline_rect {\r
  position: absolute;\r
  pointer-events: none;\r
  box-sizing: border-box;\r
  border: 2px solid var(--color-drag1);\r
  background: var(--color-drag1-background);\r
  border-radius: 5px;\r
  z-index: 1000;\r
}\r
.flexlayout__outline_rect_edge {\r
  pointer-events: none;\r
  border: 2px solid var(--color-drag2);\r
  background: var(--color-drag2-background);\r
  border-radius: 5px;\r
  z-index: 1000;\r
  box-sizing: border-box;\r
}\r
.flexlayout__edge_rect {\r
  position: absolute;\r
  z-index: 1000;\r
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r
  background-color: var(--color-edge-marker);\r
  pointer-events: none;\r
}\r
.flexlayout__drag_rect {\r
  position: absolute;\r
  cursor: move;\r
  color: var(--color-drag-rect);\r
  background-color: var(--color-drag-rect-background);\r
  border: 2px solid var(--color-drag-rect-border);\r
  border-radius: 5px;\r
  z-index: 1000;\r
  box-sizing: border-box;\r
  opacity: 0.9;\r
  text-align: center;\r
  display: flex;\r
  justify-content: center;\r
  flex-direction: column;\r
  overflow: hidden;\r
  padding: 0.3em 1em;\r
  word-wrap: break-word;\r
  font-size: var(--font-size);\r
  font-family: var(--font-family);\r
}\r
.flexlayout__tabset {\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
  background-color: var(--color-tabset-background);\r
  box-sizing: border-box;\r
  font-size: var(--font-size);\r
  font-family: var(--font-family);\r
}\r
.flexlayout__tabset_tab_divider {\r
  width: 4px;\r
}\r
.flexlayout__tabset_content {\r
  display: flex;\r
  flex-grow: 1;\r
  align-items: center;\r
  justify-content: center;\r
}\r
.flexlayout__tabset_header {\r
  display: flex;\r
  align-items: center;\r
  padding: 3px 3px 3px 5px;\r
  box-sizing: border-box;\r
  border-bottom: 1px solid var(--color-tabset-divider-line);\r
  color: var(--color-tabset-header);\r
  background-color: var(--color-tabset-header-background);\r
}\r
.flexlayout__tabset_header_content {\r
  flex-grow: 1;\r
}\r
.flexlayout__tabset_tabbar_outer {\r
  box-sizing: border-box;\r
  background-color: var(--color-tabset-background);\r
  overflow: hidden;\r
  display: flex;\r
}\r
.flexlayout__tabset_tabbar_outer_top {\r
  border-bottom: 1px solid var(--color-tabset-divider-line);\r
}\r
.flexlayout__tabset_tabbar_outer_bottom {\r
  border-top: 1px solid var(--color-tabset-divider-line);\r
}\r
.flexlayout__tabset_tabbar_inner {\r
  position: relative;\r
  box-sizing: border-box;\r
  display: flex;\r
  flex-grow: 1;\r
  overflow: hidden;\r
}\r
.flexlayout__tabset_tabbar_inner_tab_container {\r
  display: flex;\r
  padding-left: 4px;\r
  padding-right: 4px;\r
  box-sizing: border-box;\r
  position: absolute;\r
  top: 0;\r
  bottom: 0;\r
  width: 10000px;\r
}\r
.flexlayout__tabset_tabbar_inner_tab_container_top {\r
  border-top: 2px solid transparent;\r
}\r
.flexlayout__tabset_tabbar_inner_tab_container_bottom {\r
  border-bottom: 2px solid transparent;\r
}\r
.flexlayout__tabset-selected {\r
  background-color: var(--color-tabset-background-selected);\r
}\r
.flexlayout__tabset-maximized {\r
  background-color: var(--color-tabset-background-maximized);\r
}\r
.flexlayout__tab_button_stamp {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.3em;\r
  white-space: nowrap;\r
  box-sizing: border-box;\r
}\r
.flexlayout__tab {\r
  overflow: auto;\r
  position: absolute;\r
  box-sizing: border-box;\r
  background-color: var(--color-background);\r
  color: var(--color-text);\r
}\r
.flexlayout__tab_button {\r
  display: flex;\r
  gap: 0.3em;\r
  align-items: center;\r
  box-sizing: border-box;\r
  padding: 3px 0.5em;\r
  cursor: pointer;\r
}\r
.flexlayout__tab_button--selected {\r
  background-color: var(--color-tab-selected-background);\r
  color: var(--color-tab-selected);\r
}\r
@media (hover: hover) {\r
  .flexlayout__tab_button:hover {\r
    background-color: var(--color-tab-selected-background);\r
    color: var(--color-tab-selected);\r
  }\r
}\r
.flexlayout__tab_button--unselected {\r
  background-color: var(--color-tab-unselected-background);\r
  color: var(--color-tab-unselected);\r
  color: gray;\r
}\r
.flexlayout__tab_button_leading {\r
  display: flex;\r
}\r
.flexlayout__tab_button_content {\r
  display: flex;\r
}\r
.flexlayout__tab_button_textbox {\r
  border: none;\r
  font-family: var(--font-family);\r
  font-size: var(--font-size);\r
  color: var(--color-tab-textbox);\r
  background-color: var(--color-tab-textbox-background);\r
  border: 1px inset var(--color-1);\r
  border-radius: 3px;\r
  width: 10em;\r
}\r
.flexlayout__tab_button_textbox:focus {\r
  outline: none;\r
}\r
.flexlayout__tab_button_trailing {\r
  display: flex;\r
  visibility: hidden;\r
  border-radius: 4px;\r
}\r
.flexlayout__tab_button_trailing:hover {\r
  background-color: var(--color-3);\r
}\r
@media (hover: hover) {\r
  .flexlayout__tab_button:hover .flexlayout__tab_button_trailing {\r
    visibility: visible;\r
  }\r
}\r
.flexlayout__tab_button--selected .flexlayout__tab_button_trailing {\r
  visibility: visible;\r
}\r
.flexlayout__tab_button_overflow {\r
  display: flex;\r
  align-items: center;\r
  border: none;\r
  color: var(--color-overflow);\r
  font-size: inherit;\r
  background-color: transparent;\r
}\r
.flexlayout__tab_toolbar {\r
  display: flex;\r
  align-items: center;\r
  gap: 0.3em;\r
  padding-left: 0.5em;\r
  padding-right: 0.3em;\r
}\r
.flexlayout__tab_toolbar_button {\r
  border: none;\r
  outline: none;\r
  font-size: inherit;\r
  margin: 0px;\r
  background-color: transparent;\r
  border-radius: 4px;\r
  padding: 1px;\r
}\r
@media (hover: hover) {\r
  .flexlayout__tab_toolbar_button:hover {\r
    background-color: var(--color-2);\r
  }\r
}\r
.flexlayout__tab_toolbar_sticky_buttons_container {\r
  display: flex;\r
  gap: 0.3em;\r
  padding-left: 5px;\r
  align-items: center;\r
}\r
.flexlayout__tab_floating {\r
  overflow: auto;\r
  position: absolute;\r
  box-sizing: border-box;\r
  color: var(--color-text);\r
  background-color: var(--color-background);\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.flexlayout__tab_floating_inner {\r
  overflow: auto;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.flexlayout__tab_floating_inner div {\r
  margin-bottom: 5px;\r
  text-align: center;\r
}\r
.flexlayout__tab_floating_inner div a {\r
  color: royalblue;\r
}\r
.flexlayout__border {\r
  box-sizing: border-box;\r
  overflow: hidden;\r
  display: flex;\r
  font-size: var(--font-size);\r
  font-family: var(--font-family);\r
  color: var(--color-border);\r
  background-color: var(--color-border-background);\r
}\r
.flexlayout__border_top {\r
  border-bottom: 1px solid var(--color-border-divider-line);\r
  align-items: center;\r
}\r
.flexlayout__border_bottom {\r
  border-top: 1px solid var(--color-border-divider-line);\r
  align-items: center;\r
}\r
.flexlayout__border_left {\r
  border-right: 1px solid var(--color-border-divider-line);\r
  align-content: center;\r
  flex-direction: column;\r
}\r
.flexlayout__border_right {\r
  border-left: 1px solid var(--color-border-divider-line);\r
  align-content: center;\r
  flex-direction: column;\r
}\r
.flexlayout__border_inner {\r
  position: relative;\r
  box-sizing: border-box;\r
  display: flex;\r
  overflow: hidden;\r
  flex-grow: 1;\r
}\r
.flexlayout__border_inner_tab_container {\r
  white-space: nowrap;\r
  display: flex;\r
  padding-left: 2px;\r
  padding-right: 2px;\r
  box-sizing: border-box;\r
  position: absolute;\r
  top: 0;\r
  bottom: 0;\r
  width: 10000px;\r
}\r
.flexlayout__border_inner_tab_container_right {\r
  transform-origin: top left;\r
  transform: rotate(90deg);\r
}\r
.flexlayout__border_inner_tab_container_left {\r
  flex-direction: row-reverse;\r
  transform-origin: top right;\r
  transform: rotate(-90deg);\r
}\r
.flexlayout__border_tab_divider {\r
  width: 4px;\r
}\r
.flexlayout__border_button {\r
  display: flex;\r
  gap: 0.3em;\r
  align-items: center;\r
  cursor: pointer;\r
  padding: 3px 0.5em;\r
  margin: 2px 0px;\r
  box-sizing: border-box;\r
  white-space: nowrap;\r
}\r
.flexlayout__border_button--selected {\r
  background-color: var(--color-border-tab-selected-background);\r
  color: var(--color-border-tab-selected);\r
}\r
@media (hover: hover) {\r
  .flexlayout__border_button:hover {\r
    background-color: var(--color-border-tab-selected-background);\r
    color: var(--color-border-tab-selected);\r
  }\r
}\r
.flexlayout__border_button--unselected {\r
  background-color: var(--color-border-tab-unselected-background);\r
  color: var(--color-border-tab-unselected);\r
}\r
.flexlayout__border_button_leading {\r
  display: flex;\r
}\r
.flexlayout__border_button_content {\r
  display: flex;\r
}\r
.flexlayout__border_button_trailing {\r
  display: flex;\r
  border-radius: 4px;\r
  visibility: hidden;\r
}\r
.flexlayout__border_button_trailing:hover {\r
  background-color: var(--color-3);\r
}\r
@media (hover: hover) {\r
  .flexlayout__border_button:hover .flexlayout__border_button_trailing {\r
    visibility: visible;\r
  }\r
}\r
.flexlayout__border_button--selected .flexlayout__border_button_trailing {\r
  visibility: visible;\r
}\r
.flexlayout__border_toolbar {\r
  display: flex;\r
  gap: 0.3em;\r
  align-items: center;\r
}\r
.flexlayout__border_toolbar_left, .flexlayout__border_toolbar_right {\r
  flex-direction: column;\r
  padding-top: 0.5em;\r
  padding-bottom: 0.3em;\r
}\r
.flexlayout__border_toolbar_top, .flexlayout__border_toolbar_bottom {\r
  padding-left: 0.5em;\r
  padding-right: 0.3em;\r
}\r
.flexlayout__border_toolbar_button {\r
  border: none;\r
  outline: none;\r
  font-size: inherit;\r
  background-color: transparent;\r
  border-radius: 4px;\r
  padding: 1px;\r
}\r
@media (hover: hover) {\r
  .flexlayout__border_toolbar_button:hover {\r
    background-color: var(--color-2);\r
  }\r
}\r
.flexlayout__border_toolbar_button_overflow {\r
  display: flex;\r
  align-items: center;\r
  border: none;\r
  color: var(--color-overflow);\r
  font-size: inherit;\r
  background-color: transparent;\r
}\r
.flexlayout__popup_menu {\r
  font-size: var(--font-size);\r
  font-family: var(--font-family);\r
}\r
.flexlayout__popup_menu_item {\r
  padding: 2px 0.5em;\r
  white-space: nowrap;\r
  cursor: pointer;\r
  border-radius: 2px;\r
}\r
@media (hover: hover) {\r
  .flexlayout__popup_menu_item:hover {\r
    background-color: var(--color-6);\r
  }\r
}\r
.flexlayout__popup_menu_container {\r
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\r
  border: 1px solid var(--color-popup-border);\r
  color: var(--color-popup-unselected);\r
  background: var(--color-popup-unselected-background);\r
  border-radius: 3px;\r
  position: absolute;\r
  z-index: 1000;\r
  max-height: 50%;\r
  min-width: 100px;\r
  overflow: auto;\r
  padding: 2px;\r
}\r
.flexlayout__floating_window _body {\r
  height: 100%;\r
}\r
.flexlayout__floating_window_content {\r
  left: 0;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  position: absolute;\r
}\r
.flexlayout__floating_window_tab {\r
  overflow: auto;\r
  left: 0;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  position: absolute;\r
  box-sizing: border-box;\r
  background-color: var(--color-background);\r
  color: var(--color-text);\r
}\r
.flexlayout__error_boundary_container {\r
  left: 0;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  position: absolute;\r
  display: flex;\r
  justify-content: center;\r
}\r
.flexlayout__error_boundary_content {\r
  display: flex;\r
  align-items: center;\r
}\r
.flexlayout__tabset_sizer {\r
  padding-top: 5px;\r
  padding-bottom: 3px;\r
  font-size: var(--font-size);\r
  font-family: var(--font-family);\r
}\r
.flexlayout__tabset_header_sizer {\r
  padding-top: 3px;\r
  padding-bottom: 3px;\r
  font-size: var(--font-size);\r
  font-family: var(--font-family);\r
}\r
.flexlayout__border_sizer {\r
  padding-top: 6px;\r
  padding-bottom: 5px;\r
  font-size: var(--font-size);\r
  font-family: var(--font-family);\r
}\r
\r
/*# sourceMappingURL=light.css.map */\r
`;export{r as default};
