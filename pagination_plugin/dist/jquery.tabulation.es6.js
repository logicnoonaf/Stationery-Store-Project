// ====================================================
//  jquery.tabulation v2.0.0
//  Licensed by MIT
//  https://github.com/ruastronaut/jquery.tabulation
//  Copyright 2019 @ruastronaut
// ====================================================
(function($) {
  const methods = {
    init: function(options) {
      const $root = $(this);
      const id = $root.attr('data-tabulation-id');

      const defaultOptions = {
        default: undefined,
        nav: 'active',
        tab: 'active',
        beforeSet: undefined,
        afterSet: undefined
      };

      $root.data($.extend(defaultOptions, options));
      $root.find(`[data-tabulation-ref="${id}"][data-tabulation-nav]`).on('click', methods.set);

      const index = defaultOptions.default !== undefined ? defaultOptions.default : $root.find(`[data-tabulation-ref="${id}"][data-tabulation-nav]`).eq(0).attr('data-tabulation-nav');
      methods.change.call(this, index);
    },

    get: function() {
      const $root = $(this);

      return $root.attr('tabulation-index');
    },

    set: function() {
      const $this = $(this);
      const $root = $this.closest(`[data-tabulation-id="${$this.attr('data-tabulation-ref')}"]`);
      const index = $this.attr('data-tabulation-nav');

      return methods.change.call($root.get(0), index);
    },
    
    change: function(index) {
      const $root = $(this);
      const id = $root.attr('data-tabulation-id');

      if (typeof $root.data('beforeSet') === 'function')
        if ($root.data('beforeSet').call(this, index) === false)
          return false;

      $root.find(`[data-tabulation-ref="${id}"][data-tabulation-nav]`)
        .removeClass($root.data('nav'))
        .filter(`[data-tabulation-nav="${index}"]`)
        .addClass($root.data('nav'));

      $root.find(`[data-tabulation-ref="${id}"][data-tabulation-tab]`)
        .removeClass($root.data('tab')).hide()
        .filter(`[data-tabulation-tab="${index}"]`)
        .addClass($root.data('tab')).show();
      
      $root.attr('tabulation-index', index);

      if (typeof $root.data('afterSet') === 'function')
        $root.data('afterSet').call(this, index);

      return true;
    },

    destroy: function() {
      const $root = $(this);
      const id = $root.attr('data-tabulation-id');
      
      $root.find(`[data-tabulation-ref="${id}"][data-tabulation-nav]`).unbind('click');
      $root.find(`[data-tabulation-ref="${id}"][data-tabulation-nav]`).removeClass($root.data('nav'));
      $root.find(`[data-tabulation-ref="${id}"][data-tabulation-tab]`).removeClass($root.data('tab')).show();
    }
  }

  $.fn.tabulation = function(method) {
    if (methods[method])
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    else if (typeof method === 'object' || !method)
      methods.init.apply(this, arguments);
    else
      $.error(`jquery.tabulation: method "${method}" does not exist.`);
  }
})(jQuery);