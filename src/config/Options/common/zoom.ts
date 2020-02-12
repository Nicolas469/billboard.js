/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * zoom config options
 */
export default {
    /**
     * Set zoom options
     * @name zoom
     * @memberof Options
     * @type {Object}
     * @property {Boolean} [zoom.enabled=false] Enable zooming.
     * @property {String} [zoom.enabled.type='wheel'] Set zoom interaction type.
     *  - **Available types:**
     *    - wheel
     *    - drag
     * @property {Boolean} [zoom.rescale=false] Enable to rescale after zooming.<br>
     *  If true set, y domain will be updated according to the zoomed region.
     * @property {Array} [zoom.extent=[1, 10]] Change zoom extent.
     * @property {Number|Date} [zoom.x.min] Set x Axis minimum zoom range
     * @property {Number|Date} [zoom.x.max] Set x Axis maximum zoom range
     * @property {Function} [zoom.onzoomstart=undefined] Set callback that is called when zooming starts.<br>
     *  Specified function receives the zoom event.
     * @property {Function} [zoom.onzoom=undefined] Set callback that is called when the chart is zooming.<br>
     *  Specified function receives the zoomed domain.
     * @property {Function} [zoom.onzoomend=undefined] Set callback that is called when zooming ends.<br>
     *  Specified function receives the zoomed domain.
     * @property {Boolean|Object} [zoom.resetButton=true] Set to display zoom reset button for 'drag' type zoom
     * @property {Function} [zoom.resetButton.onclick] Set callback when clicks the reset button. The callback will receive reset button element reference as argument.
     * @property {String} [zoom.resetButton.text='Reset Zoom'] Text value for zoom reset button.
     * @see [Demo:zoom](https://naver.github.io/billboard.js/demo/#Interaction.Zoom)
     * @see [Demo:drag zoom](https://naver.github.io/billboard.js/demo/#Interaction.DragZoom)
     * @example
     *  zoom: {
     *      enabled: {
     *          type: "drag"
     *      },
     *      rescale: true,
     *      extent: [1, 100]  // enable more zooming
     *      x: {
     *          min: -1,  // set min range
     *          max: 10  // set max range
     *      },
     *      onzoomstart: function(event) { ... },
     *      onzoom: function(domain) { ... },
     *      onzoomend: function(domain) { ... },
     *
     *      // show reset button when is zoomed-in
     *      resetButton: true,
     *
     *      resetButton: {
     *          // onclick callback when reset button is clicked
     *          onclick: function(button) {
     *            button; // Reset button element reference
     *            ...
     *          },
     *
     *          // customized text value for reset zoom button
     *          text: "Unzoom"
     *      }
     *  }
     */
    zoom_enabled: <{type: "wheel" | "drag"}|boolean|undefined> undefined,
    zoom_extent: <number[]|undefined> undefined,
    zoom_privileged: false,
    zoom_rescale: false,
    zoom_onzoom: <Function|undefined> undefined,
    zoom_onzoomstart: <Function|undefined> undefined,
    zoom_onzoomend: <Function|undefined> undefined,
    zoom_resetButton: <{text: string;}|boolean> true,
    zoom_x_min: <Number|Date|undefined> undefined,
    zoom_x_max: <Number|Date|undefined> undefined
};
