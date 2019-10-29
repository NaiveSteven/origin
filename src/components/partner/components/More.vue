<template>
    <div>
<!-- Main -->
<section id="main">
	<div class="inner">
		<div class="image fit">
			<img src="../../../assets/img/pic11.jpg" alt="" />
		</div>
		<header>
			<h1 style="color: #2E8B57">绿色乡村随笔</h1>
			<p class="info">3 days ago by <a href="#">Jane Doe</a></p>
		</header>
		<p style="font-size: 15px;color: #008B45;font-family: Lato">初入村口，绿树掩映，原生态的乡土风貌便扑入眼帘。那绿意盎然、春色清新的空气，和着四月的梧桐花香，沁人心脾，有一种回归自然、置身原野的感觉。村后瘦小的山峦，披上了厚重的绿装，苍翠中彰显气势；路两旁是绿油油的麦地和菜园，生机勃勃，一些废弃的旮旯场地周围绿树环绕；田间地头，野草萋萋。不常回家，难得一见这绿色“庄园”，我开始心旷神怡。</p>
		<p style="font-size: 15px;color: #008B45;font-family: Lato">没回家之前，还想着正是人间好时节，不知该到哪去找一处好景致来观赏，才不枉一季春天。城里住久了，竟没有了四季变化的概念。不细细观察，很难察觉到沉睡一季的草木慢慢苏醒、舒展、生机勃勃的过程。城市千篇一律的风景，多是人工修整而成，四季常绿，领略不到生命的变幻。比起公园里的姹紫嫣红、精雕细琢，这乡村的满眼绿色、郁郁葱葱，更让我眼前生亮。</p>
		<p style="font-size: 15px;color: #008B45;font-family: Lato">坐在小院里，抬头是高大的杨树，茂盛的枝叶在风里沙沙作响。几只不知名的鸟儿藏在树上，叽叽喳喳，声音清脆悠扬。没有了车鸣的喧嚣、街区的人声鼎沸、附近三三两两人们的说话交谈，耳边只剩树叶跟风呢喃、鸟儿们说着情话。居于乡野的人习以为常的风景，对我来说，却有一种久违的温暖、别样的安心。</p>
		<p style="font-size: 15px;color: #008B45;font-family: Lato">想到了儿时家乡，房前屋后总要种几棵白杨。它们修长的腰身长得很快，直直向上，枝繁叶茂，几年功夫，便能长到碗口般粗壮。树荫下是人们乘凉的好地方，它们也是育树成材的首选树种。待长大成材，便又种下一批新的树苗。它们如农人日复一日的劳作和生活，带着生生不息的希望和生命力，根植土地，把热情和宽厚播撒人间，造福人类。</p>
    <p style="font-size: 15px;color: #008B45;font-family: Lato">带着对绿树的敬仰，忽然感到了自己的浅薄。常常身处钢筋水泥、鳞次栉比的拥挤和喧嚣，看到一朵新开的花、一处泛绿的小草，就欣喜不已。或抒发、或感叹、或寄情，俨然成了文人笔下的酸秀才，自以为见多识广，此时却成了乡村人眼里少见多怪的怪人。在这片以大绿色为背景的乡村，也许人们不知道什么是世外桃源，什么是秀色可餐，却懂得树是一个地方的根，是地气儿，是生命的源头和伸延。</p>
	</div>
</section>

<!-- Footer -->
<footer id="footer">
	<ul class="icons">
		<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
		<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
		<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
	</ul>
	<div class="copyright">联系方式：weilan@contact.com</div>
</footer>
    </div>
</template>

<script>
import '../../../assets/styles/font-awesome.min.css'
import '../../../assets/styles/word-style.css'

import '../../../assets/js/jquery.min.js'
import '../../../assets/js/jquery.scrolly.min.js'
import '../../../assets/js/skel.min.js'
export default{
		methods:{
			get(){
				(function($) {

	/**
	 * Generate an indented list of links from a nav. Meant for use with panel().
	 * @return {jQuery} jQuery object.
	 */
	$.fn.navList = function() {

		var	$this = $(this);
			$a = $this.find('a'),
			b = [];

		$a.each(function() {

			var	$this = $(this),
				indent = Math.max(0, $this.parents('li').length - 1),
				href = $this.attr('href'),
				target = $this.attr('target');

			b.push(
				'<a ' +
					'class="link depth-' + indent + '"' +
					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
				'>' +
					'<span class="indent-' + indent + '"></span>' +
					$this.text() +
				'</a>'
			);

		});

		return b.join('');

	};

	/**
	 * Panel-ify an element.
	 * @param {object} userConfig User config.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.panel = function(userConfig) {

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).panel(userConfig);

				return $this;

			}

		// Vars.
			var	$this = $(this),
				$body = $('body'),
				$window = $(window),
				id = $this.attr('id'),
				config;

		// Config.
			config = $.extend({

				// Delay.
					delay: 0,

				// Hide panel on link click.
					hideOnClick: false,

				// Hide panel on escape keypress.
					hideOnEscape: false,

				// Hide panel on swipe.
					hideOnSwipe: false,

				// Reset scroll position on hide.
					resetScroll: false,

				// Reset forms on hide.
					resetForms: false,

				// Side of viewport the panel will appear.
					side: null,

				// Target element for "class".
					target: $this,

				// Class to toggle.
					visibleClass: 'visible'

			}, userConfig);

			// Expand "target" if it's not a jQuery object already.
				if (typeof config.target != 'jQuery')
					config.target = $(config.target);

		// Panel.

			// Methods.
				$this._hide = function(event) {

					// Already hidden? Bail.
						if (!config.target.hasClass(config.visibleClass))
							return;

					// If an event was provided, cancel it.
						if (event) {

							event.preventDefault();
							event.stopPropagation();

						}

					// Hide.
						config.target.removeClass(config.visibleClass);

					// Post-hide stuff.
						window.setTimeout(function() {

							// Reset scroll position.
								if (config.resetScroll)
									$this.scrollTop(0);

							// Reset forms.
								if (config.resetForms)
									$this.find('form').each(function() {
										this.reset();
									});

						}, config.delay);

				};

			// Vendor fixes.
				$this
					.css('-ms-overflow-style', '-ms-autohiding-scrollbar')
					.css('-webkit-overflow-scrolling', 'touch');

			// Hide on click.
				if (config.hideOnClick) {

					$this.find('a')
						.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

					$this
						.on('click', 'a', function(event) {

							var $a = $(this),
								href = $a.attr('href'),
								target = $a.attr('target');

							if (!href || href == '#' || href == '' || href == '#' + id)
								return;

							// Cancel original event.
								event.preventDefault();
								event.stopPropagation();

							// Hide panel.
								$this._hide();

							// Redirect to href.
								window.setTimeout(function() {

									if (target == '_blank')
										window.open(href);
									else
										window.location.href = href;

								}, config.delay + 10);

						});

				}

			// Event: Touch stuff.
				$this.on('touchstart', function(event) {

					$this.touchPosX = event.originalEvent.touches[0].pageX;
					$this.touchPosY = event.originalEvent.touches[0].pageY;

				})

				$this.on('touchmove', function(event) {

					if ($this.touchPosX === null
					||	$this.touchPosY === null)
						return;

					var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
						diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
						th = $this.outerHeight(),
						ts = ($this.get(0).scrollHeight - $this.scrollTop());

					// Hide on swipe?
						if (config.hideOnSwipe) {

							var result = false,
								boundary = 20,
								delta = 50;

							switch (config.side) {

								case 'left':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
									break;

								case 'right':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
									break;

								case 'top':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
									break;

								case 'bottom':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
									break;

								default:
									break;

							}

							if (result) {

								$this.touchPosX = null;
								$this.touchPosY = null;
								$this._hide();

								return false;

							}

						}

					// Prevent vertical scrolling past the top or bottom.
						if (($this.scrollTop() < 0 && diffY < 0)
						|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

							event.preventDefault();
							event.stopPropagation();

						}

				});

			// Event: Prevent certain events inside the panel from bubbling.
				$this.on('click touchend touchstart touchmove', function(event) {
					event.stopPropagation();
				});

			// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
				$this.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.removeClass(config.visibleClass);

				});

		// Body.

			// Event: Hide panel on body click/tap.
				$body.on('click touchend', function(event) {
					$this._hide(event);
				});

			// Event: Toggle.
				$body.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.toggleClass(config.visibleClass);

				});

		// Window.

			// Event: Hide on ESC.
				if (config.hideOnEscape)
					$window.on('keydown', function(event) {

						if (event.keyCode == 27)
							$this._hide(event);

					});

		return $this;

	};

	/**
	 * Apply "placeholder" attribute polyfill to one or more forms.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.placeholder = function() {

		// Browser natively supports placeholders? Bail.
			if (typeof (document.createElement('input')).placeholder != 'undefined')
				return $(this);

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).placeholder();

				return $this;

			}

		// Vars.
			var $this = $(this);

		// Text, TextArea.
			$this.find('input[type=text],textarea')
				.each(function() {

					var i = $(this);

					if (i.val() == ''
					||  i.val() == i.attr('placeholder'))
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('blur', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == '')
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('focus', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == i.attr('placeholder'))
						i
							.removeClass('polyfill-placeholder')
							.val('');

				});

		// Password.
			$this.find('input[type=password]')
				.each(function() {

					var i = $(this);
					var x = $(
								$('<div>')
									.append(i.clone())
									.remove()
									.html()
									.replace(/type="password"/i, 'type="text"')
									.replace(/type=password/i, 'type=text')
					);

					if (i.attr('id') != '')
						x.attr('id', i.attr('id') + '-polyfill-field');

					if (i.attr('name') != '')
						x.attr('name', i.attr('name') + '-polyfill-field');

					x.addClass('polyfill-placeholder')
						.val(x.attr('placeholder')).insertAfter(i);

					if (i.val() == '')
						i.hide();
					else
						x.hide();

					i
						.on('blur', function(event) {

							event.preventDefault();

							var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

							if (i.val() == '') {

								i.hide();
								x.show();

							}

						});

					x
						.on('focus', function(event) {

							event.preventDefault();

							var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

							x.hide();

							i
								.show()
								.focus();

						})
						.on('keypress', function(event) {

							event.preventDefault();
							x.val('');

						});

				});

		// Events.
			$this
				.on('submit', function() {

					$this.find('input[type=text],input[type=password],textarea')
						.each(function(event) {

							var i = $(this);

							if (i.attr('name').match(/-polyfill-field$/))
								i.attr('name', '');

							if (i.val() == i.attr('placeholder')) {

								i.removeClass('polyfill-placeholder');
								i.val('');

							}

						});

				})
				.on('reset', function(event) {

					event.preventDefault();

					$this.find('select')
						.val($('option:first').val());

					$this.find('input,textarea')
						.each(function() {

							var i = $(this),
								x;

							i.removeClass('polyfill-placeholder');

							switch (this.type) {

								case 'submit':
								case 'reset':
									break;

								case 'password':
									i.val(i.attr('defaultValue'));

									x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

									if (i.val() == '') {
										i.hide();
										x.show();
									}
									else {
										i.show();
										x.hide();
									}

									break;

								case 'checkbox':
								case 'radio':
									i.attr('checked', i.attr('defaultValue'));
									break;

								case 'text':
								case 'textarea':
									i.val(i.attr('defaultValue'));

									if (i.val() == '') {
										i.addClass('polyfill-placeholder');
										i.val(i.attr('placeholder'));
									}

									break;

								default:
									i.val(i.attr('defaultValue'));
									break;

							}
						});

				});

		return $this;

	};

	/**
	 * Moves elements to/from the first positions of their respective parents.
	 * @param {jQuery} $elements Elements (or selector) to move.
	 * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
	 */
	$.prioritize = function($elements, condition) {

		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
			if (typeof $elements != 'jQuery')
				$elements = $($elements);

		// Step through elements.
			$elements.each(function() {

				var	$e = $(this), $p,
					$parent = $e.parent();

				// No parent? Bail.
					if ($parent.length == 0)
						return;

				// Not moved? Move it.
					if (!$e.data(key)) {

						// Condition is false? Bail.
							if (!condition)
								return;

						// Get placeholder (which will serve as our point of reference for when this element needs to move back).
							$p = $e.prev();

							// Couldn't find anything? Means this element's already at the top, so bail.
								if ($p.length == 0)
									return;

						// Move element to top of parent.
							$e.prependTo($parent);

						// Mark element as moved.
							$e.data(key, $p);

					}

				// Moved already?
					else {

						// Condition is true? Bail.
							if (condition)
								return;

						$p = $e.data(key);

						// Move element back to its original location (using our placeholder).
							$e.insertAfter($p);

						// Unmark element as moved.
							$e.removeData(key);

					}

			});

	};

})(jQuery);
			},
			run(){
				(function($) {
	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');


		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Fix: IE.


		// Prioritize "important" elements on medium.


		// Scrolly.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: $header.outerHeight() -1
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Posts.
			var $posts = $('.post');

			$posts.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					x;

				// Set image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

			});

	});
})(jQuery);
			},
		},
		mounted(){
			this.get()
			this.run()
		}
}



</script>

<style scoped>
@charset "UTF-8";

/*
	Binary by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

/* Reset */

	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		-webkit-text-size-adjust: none;
	}

/* Box Model */

	*, *:before, *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

/* Containers */

	.container {
		margin-left: auto;
		margin-right: auto;
	}

	.container.\31 25\25 {
		width: 100%;
		max-width: 100em;
		min-width: 80em;
	}

	.container.\37 5\25 {
		width: 60em;
	}

	.container.\35 0\25 {
		width: 40em;
	}

	.container.\32 5\25 {
		width: 20em;
	}

	.container {
		width: 80em;
	}

	@media screen and (max-width: 1680px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 100em;
			min-width: 80em;
		}

		.container.\37 5\25 {
			width: 60em;
		}

		.container.\35 0\25 {
			width: 40em;
		}

		.container.\32 5\25 {
			width: 20em;
		}

		.container {
			width: 80em;
		}

	}

	@media screen and (max-width: 1280px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 81.25em;
			min-width: 65em;
		}

		.container.\37 5\25 {
			width: 48.75em;
		}

		.container.\35 0\25 {
			width: 32.5em;
		}

		.container.\32 5\25 {
			width: 16.25em;
		}

		.container {
			width: 65em;
		}

	}

	@media screen and (max-width: 980px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.\37 5\25 {
			width: 67.5%;
		}

		.container.\35 0\25 {
			width: 45%;
		}

		.container.\32 5\25 {
			width: 22.5%;
		}

		.container {
			width: 90%;
		}

	}

	@media screen and (max-width: 736px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.\37 5\25 {
			width: 67.5%;
		}

		.container.\35 0\25 {
			width: 45%;
		}

		.container.\32 5\25 {
			width: 22.5%;
		}

		.container {
			width: 90% !important;
		}

	}

	@media screen and (max-width: 480px) {

		.container.\31 25\25 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.\37 5\25 {
			width: 67.5%;
		}

		.container.\35 0\25 {
			width: 45%;
		}

		.container.\32 5\25 {
			width: 22.5%;
		}

		.container {
			width: 90% !important;
		}

	}

/* Grid */

	.row {
		border-bottom: solid 1px transparent;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row > * {
		float: left;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row:after, .row:before {
		content: '';
		display: block;
		clear: both;
		height: 0;
	}

	.row.uniform > * > :first-child {
		margin-top: 0;
	}

	.row.uniform > * > :last-child {
		margin-bottom: 0;
	}

	.row.\30 \25 > * {
		padding: 0 0 0 0em;
	}

	.row.\30 \25 {
		margin: 0 0 -1px 0em;
	}

	.row.uniform.\30 \25 > * {
		padding: 0em 0 0 0em;
	}

	.row.uniform.\30 \25 {
		margin: 0em 0 -1px 0em;
	}

	.row > * {
		padding: 0 0 0 2em;
	}

	.row {
		margin: 0 0 -1px -2em;
	}

	.row.uniform > * {
		padding: 2em 0 0 2em;
	}

	.row.uniform {
		margin: -2em 0 -1px -2em;
	}

	.row.\32 00\25 > * {
		padding: 0 0 0 4em;
	}

	.row.\32 00\25 {
		margin: 0 0 -1px -4em;
	}

	.row.uniform.\32 00\25 > * {
		padding: 4em 0 0 4em;
	}

	.row.uniform.\32 00\25 {
		margin: -4em 0 -1px -4em;
	}

	.row.\31 50\25 > * {
		padding: 0 0 0 3em;
	}

	.row.\31 50\25 {
		margin: 0 0 -1px -3em;
	}

	.row.uniform.\31 50\25 > * {
		padding: 3em 0 0 3em;
	}

	.row.uniform.\31 50\25 {
		margin: -3em 0 -1px -3em;
	}

	.row.\35 0\25 > * {
		padding: 0 0 0 1em;
	}

	.row.\35 0\25 {
		margin: 0 0 -1px -1em;
	}

	.row.uniform.\35 0\25 > * {
		padding: 1em 0 0 1em;
	}

	.row.uniform.\35 0\25 {
		margin: -1em 0 -1px -1em;
	}

	.row.\32 5\25 > * {
		padding: 0 0 0 0.5em;
	}

	.row.\32 5\25 {
		margin: 0 0 -1px -0.5em;
	}

	.row.uniform.\32 5\25 > * {
		padding: 0.5em 0 0 0.5em;
	}

	.row.uniform.\32 5\25 {
		margin: -0.5em 0 -1px -0.5em;
	}

	.\31 2u, .\31 2u\24 {
		width: 100%;
		clear: none;
		margin-left: 0;
	}

	.\31 1u, .\31 1u\24 {
		width: 91.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\31 0u, .\31 0u\24 {
		width: 83.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\39 u, .\39 u\24 {
		width: 75%;
		clear: none;
		margin-left: 0;
	}

	.\38 u, .\38 u\24 {
		width: 66.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\37 u, .\37 u\24 {
		width: 58.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\36 u, .\36 u\24 {
		width: 50%;
		clear: none;
		margin-left: 0;
	}

	.\35 u, .\35 u\24 {
		width: 41.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\34 u, .\34 u\24 {
		width: 33.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\33 u, .\33 u\24 {
		width: 25%;
		clear: none;
		margin-left: 0;
	}

	.\32 u, .\32 u\24 {
		width: 16.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.\31 u, .\31 u\24 {
		width: 8.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.\31 2u\24 + *,
	.\31 1u\24 + *,
	.\31 0u\24 + *,
	.\39 u\24 + *,
	.\38 u\24 + *,
	.\37 u\24 + *,
	.\36 u\24 + *,
	.\35 u\24 + *,
	.\34 u\24 + *,
	.\33 u\24 + *,
	.\32 u\24 + *,
	.\31 u\24 + * {
		clear: left;
	}

	.\-11u {
		margin-left: 91.66667%;
	}

	.\-10u {
		margin-left: 83.33333%;
	}

	.\-9u {
		margin-left: 75%;
	}

	.\-8u {
		margin-left: 66.66667%;
	}

	.\-7u {
		margin-left: 58.33333%;
	}

	.\-6u {
		margin-left: 50%;
	}

	.\-5u {
		margin-left: 41.66667%;
	}

	.\-4u {
		margin-left: 33.33333%;
	}

	.\-3u {
		margin-left: 25%;
	}

	.\-2u {
		margin-left: 16.66667%;
	}

	.\-1u {
		margin-left: 8.33333%;
	}

	@media screen and (max-width: 1680px) {

		.row > * {
			padding: 0 0 0 2em;
		}

		.row {
			margin: 0 0 -1px -2em;
		}

		.row.uniform > * {
			padding: 2em 0 0 2em;
		}

		.row.uniform {
			margin: -2em 0 -1px -2em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 4em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -4em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 4em 0 0 4em;
		}

		.row.uniform.\32 00\25 {
			margin: -4em 0 -1px -4em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 3em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.\31 50\25 {
			margin: -3em 0 -1px -3em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 1em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -1em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 1em 0 0 1em;
		}

		.row.uniform.\35 0\25 {
			margin: -1em 0 -1px -1em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.5em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.5em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.5em 0 0 0.5em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.5em 0 -1px -0.5em;
		}

		.\31 2u\28xlarge\29, .\31 2u\24\28xlarge\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28xlarge\29, .\31 1u\24\28xlarge\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28xlarge\29, .\31 0u\24\28xlarge\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28xlarge\29, .\39 u\24\28xlarge\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28xlarge\29, .\38 u\24\28xlarge\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28xlarge\29, .\37 u\24\28xlarge\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28xlarge\29, .\36 u\24\28xlarge\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28xlarge\29, .\35 u\24\28xlarge\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28xlarge\29, .\34 u\24\28xlarge\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28xlarge\29, .\33 u\24\28xlarge\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28xlarge\29, .\32 u\24\28xlarge\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28xlarge\29, .\31 u\24\28xlarge\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28xlarge\29 + *,
		.\31 1u\24\28xlarge\29 + *,
		.\31 0u\24\28xlarge\29 + *,
		.\39 u\24\28xlarge\29 + *,
		.\38 u\24\28xlarge\29 + *,
		.\37 u\24\28xlarge\29 + *,
		.\36 u\24\28xlarge\29 + *,
		.\35 u\24\28xlarge\29 + *,
		.\34 u\24\28xlarge\29 + *,
		.\33 u\24\28xlarge\29 + *,
		.\32 u\24\28xlarge\29 + *,
		.\31 u\24\28xlarge\29 + * {
			clear: left;
		}

		.\-11u\28xlarge\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28xlarge\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28xlarge\29 {
			margin-left: 75%;
		}

		.\-8u\28xlarge\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28xlarge\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28xlarge\29 {
			margin-left: 50%;
		}

		.\-5u\28xlarge\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28xlarge\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28xlarge\29 {
			margin-left: 25%;
		}

		.\-2u\28xlarge\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28xlarge\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 1280px) {

		.row > * {
			padding: 0 0 0 1.5em;
		}

		.row {
			margin: 0 0 -1px -1.5em;
		}

		.row.uniform > * {
			padding: 1.5em 0 0 1.5em;
		}

		.row.uniform {
			margin: -1.5em 0 -1px -1.5em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 3em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.\32 00\25 {
			margin: -3em 0 -1px -3em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 2.25em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -2.25em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 2.25em 0 0 2.25em;
		}

		.row.uniform.\31 50\25 {
			margin: -2.25em 0 -1px -2.25em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 0.75em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -0.75em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 0.75em 0 0 0.75em;
		}

		.row.uniform.\35 0\25 {
			margin: -0.75em 0 -1px -0.75em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.375em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.375em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.375em 0 0 0.375em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.375em 0 -1px -0.375em;
		}

		.\31 2u\28large\29, .\31 2u\24\28large\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28large\29, .\31 1u\24\28large\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28large\29, .\31 0u\24\28large\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28large\29, .\39 u\24\28large\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28large\29, .\38 u\24\28large\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28large\29, .\37 u\24\28large\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28large\29, .\36 u\24\28large\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28large\29, .\35 u\24\28large\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28large\29, .\34 u\24\28large\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28large\29, .\33 u\24\28large\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28large\29, .\32 u\24\28large\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28large\29, .\31 u\24\28large\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28large\29 + *,
		.\31 1u\24\28large\29 + *,
		.\31 0u\24\28large\29 + *,
		.\39 u\24\28large\29 + *,
		.\38 u\24\28large\29 + *,
		.\37 u\24\28large\29 + *,
		.\36 u\24\28large\29 + *,
		.\35 u\24\28large\29 + *,
		.\34 u\24\28large\29 + *,
		.\33 u\24\28large\29 + *,
		.\32 u\24\28large\29 + *,
		.\31 u\24\28large\29 + * {
			clear: left;
		}

		.\-11u\28large\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28large\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28large\29 {
			margin-left: 75%;
		}

		.\-8u\28large\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28large\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28large\29 {
			margin-left: 50%;
		}

		.\-5u\28large\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28large\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28large\29 {
			margin-left: 25%;
		}

		.\-2u\28large\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28large\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 980px) {

		.row > * {
			padding: 0 0 0 1.5em;
		}

		.row {
			margin: 0 0 -1px -1.5em;
		}

		.row.uniform > * {
			padding: 1.5em 0 0 1.5em;
		}

		.row.uniform {
			margin: -1.5em 0 -1px -1.5em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 3em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.\32 00\25 {
			margin: -3em 0 -1px -3em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 2.25em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -2.25em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 2.25em 0 0 2.25em;
		}

		.row.uniform.\31 50\25 {
			margin: -2.25em 0 -1px -2.25em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 0.75em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -0.75em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 0.75em 0 0 0.75em;
		}

		.row.uniform.\35 0\25 {
			margin: -0.75em 0 -1px -0.75em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.375em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.375em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.375em 0 0 0.375em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.375em 0 -1px -0.375em;
		}

		.\31 2u\28medium\29, .\31 2u\24\28medium\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28medium\29, .\31 1u\24\28medium\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28medium\29, .\31 0u\24\28medium\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28medium\29, .\39 u\24\28medium\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28medium\29, .\38 u\24\28medium\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28medium\29, .\37 u\24\28medium\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28medium\29, .\36 u\24\28medium\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28medium\29, .\35 u\24\28medium\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28medium\29, .\34 u\24\28medium\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28medium\29, .\33 u\24\28medium\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28medium\29, .\32 u\24\28medium\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28medium\29, .\31 u\24\28medium\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28medium\29 + *,
		.\31 1u\24\28medium\29 + *,
		.\31 0u\24\28medium\29 + *,
		.\39 u\24\28medium\29 + *,
		.\38 u\24\28medium\29 + *,
		.\37 u\24\28medium\29 + *,
		.\36 u\24\28medium\29 + *,
		.\35 u\24\28medium\29 + *,
		.\34 u\24\28medium\29 + *,
		.\33 u\24\28medium\29 + *,
		.\32 u\24\28medium\29 + *,
		.\31 u\24\28medium\29 + * {
			clear: left;
		}

		.\-11u\28medium\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28medium\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28medium\29 {
			margin-left: 75%;
		}

		.\-8u\28medium\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28medium\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28medium\29 {
			margin-left: 50%;
		}

		.\-5u\28medium\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28medium\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28medium\29 {
			margin-left: 25%;
		}

		.\-2u\28medium\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28medium\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 736px) {

		.row > * {
			padding: 0 0 0 1.25em;
		}

		.row {
			margin: 0 0 -1px -1.25em;
		}

		.row.uniform > * {
			padding: 1.25em 0 0 1.25em;
		}

		.row.uniform {
			margin: -1.25em 0 -1px -1.25em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 2.5em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -2.5em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 2.5em 0 0 2.5em;
		}

		.row.uniform.\32 00\25 {
			margin: -2.5em 0 -1px -2.5em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 1.875em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -1.875em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 1.875em 0 0 1.875em;
		}

		.row.uniform.\31 50\25 {
			margin: -1.875em 0 -1px -1.875em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 0.625em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -0.625em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 0.625em 0 0 0.625em;
		}

		.row.uniform.\35 0\25 {
			margin: -0.625em 0 -1px -0.625em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.3125em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.3125em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.3125em 0 0 0.3125em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.3125em 0 -1px -0.3125em;
		}

		.\31 2u\28small\29, .\31 2u\24\28small\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28small\29, .\31 1u\24\28small\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28small\29, .\31 0u\24\28small\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28small\29, .\39 u\24\28small\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28small\29, .\38 u\24\28small\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28small\29, .\37 u\24\28small\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28small\29, .\36 u\24\28small\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28small\29, .\35 u\24\28small\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28small\29, .\34 u\24\28small\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28small\29, .\33 u\24\28small\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28small\29, .\32 u\24\28small\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28small\29, .\31 u\24\28small\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28small\29 + *,
		.\31 1u\24\28small\29 + *,
		.\31 0u\24\28small\29 + *,
		.\39 u\24\28small\29 + *,
		.\38 u\24\28small\29 + *,
		.\37 u\24\28small\29 + *,
		.\36 u\24\28small\29 + *,
		.\35 u\24\28small\29 + *,
		.\34 u\24\28small\29 + *,
		.\33 u\24\28small\29 + *,
		.\32 u\24\28small\29 + *,
		.\31 u\24\28small\29 + * {
			clear: left;
		}

		.\-11u\28small\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28small\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28small\29 {
			margin-left: 75%;
		}

		.\-8u\28small\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28small\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28small\29 {
			margin-left: 50%;
		}

		.\-5u\28small\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28small\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28small\29 {
			margin-left: 25%;
		}

		.\-2u\28small\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28small\29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 480px) {

		.row > * {
			padding: 0 0 0 1.25em;
		}

		.row {
			margin: 0 0 -1px -1.25em;
		}

		.row.uniform > * {
			padding: 1.25em 0 0 1.25em;
		}

		.row.uniform {
			margin: -1.25em 0 -1px -1.25em;
		}

		.row.\32 00\25 > * {
			padding: 0 0 0 2.5em;
		}

		.row.\32 00\25 {
			margin: 0 0 -1px -2.5em;
		}

		.row.uniform.\32 00\25 > * {
			padding: 2.5em 0 0 2.5em;
		}

		.row.uniform.\32 00\25 {
			margin: -2.5em 0 -1px -2.5em;
		}

		.row.\31 50\25 > * {
			padding: 0 0 0 1.875em;
		}

		.row.\31 50\25 {
			margin: 0 0 -1px -1.875em;
		}

		.row.uniform.\31 50\25 > * {
			padding: 1.875em 0 0 1.875em;
		}

		.row.uniform.\31 50\25 {
			margin: -1.875em 0 -1px -1.875em;
		}

		.row.\35 0\25 > * {
			padding: 0 0 0 0.625em;
		}

		.row.\35 0\25 {
			margin: 0 0 -1px -0.625em;
		}

		.row.uniform.\35 0\25 > * {
			padding: 0.625em 0 0 0.625em;
		}

		.row.uniform.\35 0\25 {
			margin: -0.625em 0 -1px -0.625em;
		}

		.row.\32 5\25 > * {
			padding: 0 0 0 0.3125em;
		}

		.row.\32 5\25 {
			margin: 0 0 -1px -0.3125em;
		}

		.row.uniform.\32 5\25 > * {
			padding: 0.3125em 0 0 0.3125em;
		}

		.row.uniform.\32 5\25 {
			margin: -0.3125em 0 -1px -0.3125em;
		}

		.\31 2u\28xsmall\29, .\31 2u\24\28xsmall\29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.\31 1u\28xsmall\29, .\31 1u\24\28xsmall\29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 0u\28xsmall\29, .\31 0u\24\28xsmall\29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\39 u\28xsmall\29, .\39 u\24\28xsmall\29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.\38 u\28xsmall\29, .\38 u\24\28xsmall\29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\37 u\28xsmall\29, .\37 u\24\28xsmall\29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\36 u\28xsmall\29, .\36 u\24\28xsmall\29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.\35 u\28xsmall\29, .\35 u\24\28xsmall\29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\34 u\28xsmall\29, .\34 u\24\28xsmall\29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\33 u\28xsmall\29, .\33 u\24\28xsmall\29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.\32 u\28xsmall\29, .\32 u\24\28xsmall\29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.\31 u\28xsmall\29, .\31 u\24\28xsmall\29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.\31 2u\24\28xsmall\29 + *,
		.\31 1u\24\28xsmall\29 + *,
		.\31 0u\24\28xsmall\29 + *,
		.\39 u\24\28xsmall\29 + *,
		.\38 u\24\28xsmall\29 + *,
		.\37 u\24\28xsmall\29 + *,
		.\36 u\24\28xsmall\29 + *,
		.\35 u\24\28xsmall\29 + *,
		.\34 u\24\28xsmall\29 + *,
		.\33 u\24\28xsmall\29 + *,
		.\32 u\24\28xsmall\29 + *,
		.\31 u\24\28xsmall\29 + * {
			clear: left;
		}

		.\-11u\28xsmall\29 {
			margin-left: 91.66667%;
		}

		.\-10u\28xsmall\29 {
			margin-left: 83.33333%;
		}

		.\-9u\28xsmall\29 {
			margin-left: 75%;
		}

		.\-8u\28xsmall\29 {
			margin-left: 66.66667%;
		}

		.\-7u\28xsmall\29 {
			margin-left: 58.33333%;
		}

		.\-6u\28xsmall\29 {
			margin-left: 50%;
		}

		.\-5u\28xsmall\29 {
			margin-left: 41.66667%;
		}

		.\-4u\28xsmall\29 {
			margin-left: 33.33333%;
		}

		.\-3u\28xsmall\29 {
			margin-left: 25%;
		}

		.\-2u\28xsmall\29 {
			margin-left: 16.66667%;
		}

		.\-1u\28xsmall\29 {
			margin-left: 8.33333%;
		}

	}

/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		-ms-overflow-style: scrollbar;
	}

	@media screen and (max-width: 480px) {

		html, body {
			min-width: 320px;
		}

	}

	body {
		background: #fff;
	}

		body.is-loading *, body.is-loading *:before, body.is-loading *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

/* Type */

	body {
		background-color: #fff;
		color: #444;
	}

	body, input, select, textarea {
		font-family: "Lato", Arial, Helvetica, sans-serif;
		font-size: 16pt;
		font-weight: 300;
		line-height: 1.75;
	}

		@media screen and (max-width: 1680px) {

			body, input, select, textarea {
				font-size: 13pt;
			}

		}

		@media screen and (max-width: 1280px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

	a {
		text-decoration: none;
	}

		a:hover {
			text-decoration: underline;
		}

	strong, b {
		font-weight: 700;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 700;
		line-height: 1.25;
		margin: 0 0 1em 0;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
		}

	h1 {
		font-size: 2.35em;
	}

	h2 {
		font-size: 1.75em;
	}

	h3 {
		font-size: 1.35em;
	}

	h4 {
		font-size: 1.1em;
	}

	h5 {
		font-size: 0.9em;
	}

	h6 {
		font-size: 0.7em;
	}

	sub {
		font-size: 0.8em;
		position: relative;
		top: 0.5em;
	}

	sup {
		font-size: 0.8em;
		position: relative;
		top: -0.5em;
	}

	blockquote {
		border-left: solid 4px;
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 2em;
	}

	code {
		border-radius: 0;
		border: solid 1px;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0.25em;
		padding: 0.25em 0.65em;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0 2em 0;
	}

		pre code {
			display: block;
			line-height: 1.75;
			padding: 1em 1.5em;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 1px;
		margin: 2em 0;
	}

		hr.major {
			margin: 3em 0;
		}

	.align-left {
		text-align: left;
	}

	.align-center {
		text-align: center;
	}

	.align-right {
		text-align: right;
	}

	input, select, textarea {
		color: #555;
	}

	a {
		color: #1abc9c;
	}

	strong, b {
		color: #555;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #555;
	}

	blockquote {
		border-left-color: rgba(144, 144, 144, 0.25);
	}

	code {
		background: rgba(144, 144, 144, 0.075);
		border-color: rgba(144, 144, 144, 0.25);
	}

	hr {
		border-bottom-color: rgba(144, 144, 144, 0.25);
	}

/* Box */

	.box {
		border-radius: 0;
		border: solid 1px;
		margin-bottom: 2em;
		padding: 1.5em;
	}

		.box > :last-child,
		.box > :last-child > :last-child,
		.box > :last-child > :last-child > :last-child {
			margin-bottom: 0;
		}

		.box.alt {
			border: 0;
			border-radius: 0;
			padding: 0;
		}

	.box {
		border-color: rgba(144, 144, 144, 0.25);
	}

/* Button */

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		border-radius: 0;
		border: 0;
		cursor: pointer;
		display: inline-block;
		font-weight: 700;
		height: 3em;
		line-height: 3em;
		padding: 0 2.5em;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			text-decoration: none;
		}

		input[type="submit"].icon,
		input[type="reset"].icon,
		input[type="button"].icon,
		button.icon,
		.button.icon {
			padding-left: 1.35em;
		}

			input[type="submit"].icon:before,
			input[type="reset"].icon:before,
			input[type="button"].icon:before,
			button.icon:before,
			.button.icon:before {
				margin-right: 0.5em;
			}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			display: block;
			margin: 0 0 1em 0;
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.8em;
		}

		input[type="submit"].big,
		input[type="reset"].big,
		input[type="button"].big,
		button.big,
		.button.big {
			font-size: 1.25em;
		}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		button.disabled,
		button:disabled,
		.button.disabled,
		.button:disabled {
			-moz-pointer-events: none;
			-webkit-pointer-events: none;
			-ms-pointer-events: none;
			pointer-events: none;
			opacity: 0.25;
		}

		@media screen and (max-width: 480px) {

			input[type="submit"],
			input[type="reset"],
			input[type="button"],
			button,
			.button {
				padding: 0;
			}

		}

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		background-color: #1abc9c;
		color: #fff !important;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			background-color: #1dd2af;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		button:active,
		.button:active {
			background-color: #17a689;
		}

		input[type="submit"].alt,
		input[type="reset"].alt,
		input[type="button"].alt,
		button.alt,
		.button.alt {
			background-color: transparent;
			box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
			color: #555 !important;
		}

			input[type="submit"].alt:hover,
			input[type="reset"].alt:hover,
			input[type="button"].alt:hover,
			button.alt:hover,
			.button.alt:hover {
				background-color: rgba(144, 144, 144, 0.075);
			}

			input[type="submit"].alt:active,
			input[type="reset"].alt:active,
			input[type="button"].alt:active,
			button.alt:active,
			.button.alt:active {
				background-color: rgba(144, 144, 144, 0.2);
			}

			input[type="submit"].alt.icon:before,
			input[type="reset"].alt.icon:before,
			input[type="button"].alt.icon:before,
			button.alt.icon:before,
			.button.alt.icon:before {
				color: #bbb;
			}

		input[type="submit"].special,
		input[type="reset"].special,
		input[type="button"].special,
		button.special,
		.button.special {
			background-color: #3498db;
			color: #fff !important;
		}

			input[type="submit"].special:hover,
			input[type="reset"].special:hover,
			input[type="button"].special:hover,
			button.special:hover,
			.button.special:hover {
				background-color: #4aa3df;
			}

			input[type="submit"].special:active,
			input[type="reset"].special:active,
			input[type="button"].special:active,
			button.special:active,
			.button.special:active {
				background-color: #258cd1;
			}

/* Form */

	form {
		margin: 0 0 2em 0;
	}

	label {
		display: block;
		font-size: 0.9em;
		font-weight: 700;
		margin: 0 0 1em 0;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		border-radius: 0;
		border: none;
		border: solid 1px;
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

	.select-wrapper {
		text-decoration: none;
		display: block;
		position: relative;
	}

		.select-wrapper:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
		}

		.select-wrapper:before {
			content: '\f078';
			display: block;
			height: 2.75em;
			line-height: 2.75em;
			pointer-events: none;
			position: absolute;
			right: 0;
			text-align: center;
			top: 0;
			width: 2.75em;
		}

		.select-wrapper select::-ms-expand {
			display: none;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		height: 2.75em;
	}

	textarea {
		padding: 0.75em 1em;
	}

	input[type="checkbox"],
	input[type="radio"] {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		float: left;
		margin-right: -2em;
		opacity: 0;
		width: 1em;
		z-index: -1;
	}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			text-decoration: none;
			cursor: pointer;
			display: inline-block;
			font-size: 1em;
			font-weight: 300;
			padding-left: 2.4em;
			padding-right: 0.75em;
			position: relative;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				border-radius: 0;
				border: solid 1px;
				content: '';
				display: inline-block;
				height: 1.65em;
				left: 0;
				line-height: 1.58125em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 1.65em;
			}

		input[type="checkbox"]:checked + label:before,
		input[type="radio"]:checked + label:before {
			content: '\f00c';
		}

	input[type="checkbox"] + label:before {
		border-radius: 0;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		opacity: 1.0;
	}

	:-moz-placeholder {
		opacity: 1.0;
	}

	::-moz-placeholder {
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		opacity: 1.0;
	}

	.formerize-placeholder {
		opacity: 1.0;
	}

	label {
		color: #555;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		background: rgba(144, 144, 144, 0.075);
		border-color: rgba(144, 144, 144, 0.25);
	}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		select:focus,
		textarea:focus {
			border-color: #fff;
			box-shadow: 0 0 0 1px #fff;
		}

	.select-wrapper:before {
		color: rgba(144, 144, 144, 0.25);
	}

	input[type="checkbox"] + label,
	input[type="radio"] + label {
		color: #444;
	}

		input[type="checkbox"] + label:before,
		input[type="radio"] + label:before {
			background: rgba(144, 144, 144, 0.075);
			border-color: rgba(144, 144, 144, 0.25);
		}

	input[type="checkbox"]:checked + label:before,
	input[type="radio"]:checked + label:before {
		background-color: #fff;
		border-color: #fff;
		color: #1abc9c;
	}

	input[type="checkbox"]:focus + label:before,
	input[type="radio"]:focus + label:before {
		border-color: #fff;
		box-shadow: 0 0 0 1px #fff;
	}

	::-webkit-input-placeholder {
		color: #bbb !important;
	}

	:-moz-placeholder {
		color: #bbb !important;
	}

	::-moz-placeholder {
		color: #bbb !important;
	}

	:-ms-input-placeholder {
		color: #bbb !important;
	}

	.formerize-placeholder {
		color: #bbb !important;
	}

/* Icon */

	.icon {
		text-decoration: none;
		border-bottom: none;
		position: relative;
		text-decoration: none !important;
	}

		.icon:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
		}

		.icon > .label {
			display: none;
		}

	.hc {
		height: 2em;
		width: 4em;
		position: absolute;
		left: 50%;
		bottom: 0;
		margin-left: -2em;
		display: block;
		border-radius: 90px 90px 0 0;
		color: #444;
		background: #fff;
	}

		.hc.up {
			border-radius: 0 0 90px 90px;
			top: 0;
			bottom: initial;
		}

		@media screen and (max-width: 980px) {

			.hc {
				display: none;
			}

		}

/* Image */

	.image {
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image img {
			display: block;
		}

		.image.left, .image.right {
			max-width: 40%;
		}

			.image.left img, .image.right img {
				width: 100%;
			}

		.image.left {
			float: left;
			margin: 0 1.5em 1em 0;
			top: 0.25em;
		}

		.image.right {
			float: right;
			margin: 0 0 1em 1.5em;
			top: 0.25em;
		}

		.image.fit {
			display: block;
			margin: 0 0 2em 0;
			width: 100%;
		}

			.image.fit img {
				width: 100%;
			}

		.image.main {
			display: block;
			margin: 0 0 3em 0;
			width: 100%;
		}

			.image.main img {
				width: 100%;
			}

/* List */

	ol {
		list-style: decimal;
		margin: 0 0 2em 0;
		padding-left: 1.25em;
	}

		ol li {
			padding-left: 0.25em;
		}

	ul {
		list-style: disc;
		margin: 0 0 2em 0;
		padding-left: 1em;
	}

		ul li {
			padding-left: 0.5em;
		}

		ul.alt {
			list-style: none;
			padding-left: 0;
		}

			ul.alt li {
				border-top: solid 1px;
				padding: 0.5em 0;
			}

				ul.alt li:first-child {
					border-top: 0;
					padding-top: 0;
				}

		ul.icons {
			cursor: default;
			list-style: none;
			padding-left: 0;
		}

			ul.icons li {
				display: inline-block;
				padding: 0 1em 0 0;
			}

				ul.icons li:last-child {
					padding-right: 0;
				}

				ul.icons li .icon:before {
					font-size: 2em;
				}

		ul.actions {
			cursor: default;
			list-style: none;
			padding-left: 0;
		}

			ul.actions li {
				display: inline-block;
				padding: 0 1em 0 0;
				vertical-align: middle;
			}

				ul.actions li:last-child {
					padding-right: 0;
				}

			ul.actions.small li {
				padding: 0 0.5em 0 0;
			}

			ul.actions.vertical li {
				display: block;
				padding: 1em 0 0 0;
			}

				ul.actions.vertical li:first-child {
					padding-top: 0;
				}

				ul.actions.vertical li > * {
					margin-bottom: 0;
				}

			ul.actions.vertical.small li {
				padding: 0.5em 0 0 0;
			}

				ul.actions.vertical.small li:first-child {
					padding-top: 0;
				}

			ul.actions.fit {
				display: table;
				margin-left: -1em;
				padding: 0;
				table-layout: fixed;
				width: calc(100% + 1em);
			}

				ul.actions.fit li {
					display: table-cell;
					padding: 0 0 0 1em;
				}

					ul.actions.fit li > * {
						margin-bottom: 0;
					}

				ul.actions.fit.small {
					margin-left: -0.5em;
					width: calc(100% + 0.5em);
				}

					ul.actions.fit.small li {
						padding: 0 0 0 0.5em;
					}

			@media screen and (max-width: 480px) {

				ul.actions {
					margin: 0 0 2em 0;
				}

					ul.actions li {
						padding: 1em 0 0 0;
						display: block;
						text-align: center;
						width: 100%;
					}

						ul.actions li:first-child {
							padding-top: 0;
						}

						ul.actions li > * {
							width: 100%;
							margin: 0 !important;
						}

							ul.actions li > *.icon:before {
								margin-left: -2em;
							}

					ul.actions.small li {
						padding: 0.5em 0 0 0;
					}

						ul.actions.small li:first-child {
							padding-top: 0;
						}

			}

	dl {
		margin: 0 0 2em 0;
	}

		dl dt {
			display: block;
			font-weight: 700;
			margin: 0 0 1em 0;
		}

		dl dd {
			margin-left: 2em;
		}

	ul.alt li {
		border-top-color: rgba(144, 144, 144, 0.25);
	}

/* Section/Article */

	section.special, article.special {
		text-align: center;
	}

	header p {
		position: relative;
		margin: 0 0 1.5em 0;
	}

	header h2 + p {
		font-size: 1.25em;
		margin-top: -1em;
	}

	header h3 + p {
		font-size: 1.1em;
		margin-top: -0.8em;
	}

	header h4 + p,
	header h5 + p,
	header h6 + p {
		font-size: 0.9em;
		margin-top: -0.6em;
	}

	header p {
		color: #bbb;
	}

/* Table */

	.table-wrapper {
		-webkit-overflow-scrolling: touch;
		overflow-x: auto;
	}

	table {
		margin: 0 0 2em 0;
		width: 100%;
	}

		table tbody tr {
			border: solid 1px;
			border-left: 0;
			border-right: 0;
		}

		table td {
			padding: 0.75em 0.75em;
		}

		table th {
			font-size: 0.9em;
			font-weight: 700;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px;
		}

		table tfoot {
			border-top: solid 2px;
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px;
				border-left-width: 0;
				border-top-width: 0;
			}

				table.alt tbody tr td:first-child {
					border-left-width: 1px;
				}

			table.alt tbody tr:first-child td {
				border-top-width: 1px;
			}

			table.alt thead {
				border-bottom: 0;
			}

			table.alt tfoot {
				border-top: 0;
			}

	table tbody tr {
		border-color: rgba(144, 144, 144, 0.25);
	}

		table tbody tr:nth-child(2n + 1) {
			background-color: rgba(144, 144, 144, 0.075);
		}

	table th {
		color: #555;
	}

	table thead {
		border-bottom-color: rgba(144, 144, 144, 0.25);
	}

	table tfoot {
		border-top-color: rgba(144, 144, 144, 0.25);
	}

	table.alt tbody tr td {
		border-color: rgba(144, 144, 144, 0.25);
	}

/* Wrapper */

	.wrapper {
		position: relative;
	}

		.wrapper > .inner {
			margin: 0 auto;
			width: 60em;
		}

		.wrapper.style1 {
			background-color: #fff;
			color: #444;
		}

			.wrapper.style1 input, .wrapper.style1 select, .wrapper.style1 textarea {
				color: #1abc9c;
			}

			.wrapper.style1 a {
				color: #1abc9c;
			}

			.wrapper.style1 strong, .wrapper.style1 b {
				color: #1abc9c;
			}

			.wrapper.style1 h1, .wrapper.style1 h2, .wrapper.style1 h3, .wrapper.style1 h4, .wrapper.style1 h5, .wrapper.style1 h6 {
				color: #1abc9c;
			}

			.wrapper.style1 blockquote {
				border-left-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style1 code {
				background: rgba(144, 144, 144, 0.075);
				border-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style1 hr {
				border-bottom-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style1 .box {
				border-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style1 input[type="submit"],
			.wrapper.style1 input[type="reset"],
			.wrapper.style1 input[type="button"],
			.wrapper.style1 button,
			.wrapper.style1 .button {
				background-color: #1abc9c;
				color: #fff !important;
			}

				.wrapper.style1 input[type="submit"]:hover,
				.wrapper.style1 input[type="reset"]:hover,
				.wrapper.style1 input[type="button"]:hover,
				.wrapper.style1 button:hover,
				.wrapper.style1 .button:hover {
					background-color: #1dd2af;
				}

				.wrapper.style1 input[type="submit"]:active,
				.wrapper.style1 input[type="reset"]:active,
				.wrapper.style1 input[type="button"]:active,
				.wrapper.style1 button:active,
				.wrapper.style1 .button:active {
					background-color: #17a689;
				}

				.wrapper.style1 input[type="submit"].alt,
				.wrapper.style1 input[type="reset"].alt,
				.wrapper.style1 input[type="button"].alt,
				.wrapper.style1 button.alt,
				.wrapper.style1 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
					color: #1abc9c !important;
				}

					.wrapper.style1 input[type="submit"].alt:hover,
					.wrapper.style1 input[type="reset"].alt:hover,
					.wrapper.style1 input[type="button"].alt:hover,
					.wrapper.style1 button.alt:hover,
					.wrapper.style1 .button.alt:hover {
						background-color: rgba(144, 144, 144, 0.075);
					}

					.wrapper.style1 input[type="submit"].alt:active,
					.wrapper.style1 input[type="reset"].alt:active,
					.wrapper.style1 input[type="button"].alt:active,
					.wrapper.style1 button.alt:active,
					.wrapper.style1 .button.alt:active {
						background-color: rgba(144, 144, 144, 0.2);
					}

					.wrapper.style1 input[type="submit"].alt.icon:before,
					.wrapper.style1 input[type="reset"].alt.icon:before,
					.wrapper.style1 input[type="button"].alt.icon:before,
					.wrapper.style1 button.alt.icon:before,
					.wrapper.style1 .button.alt.icon:before {
						color: #bbb;
					}

				.wrapper.style1 input[type="submit"].special,
				.wrapper.style1 input[type="reset"].special,
				.wrapper.style1 input[type="button"].special,
				.wrapper.style1 button.special,
				.wrapper.style1 .button.special {
					background-color: #1abc9c;
					color: #fff !important;
				}

			.wrapper.style1 label {
				color: #1abc9c;
			}

			.wrapper.style1 input[type="text"],
			.wrapper.style1 input[type="password"],
			.wrapper.style1 input[type="email"],
			.wrapper.style1 select,
			.wrapper.style1 textarea {
				background: rgba(144, 144, 144, 0.075);
				border-color: rgba(144, 144, 144, 0.25);
			}

				.wrapper.style1 input[type="text"]:focus,
				.wrapper.style1 input[type="password"]:focus,
				.wrapper.style1 input[type="email"]:focus,
				.wrapper.style1 select:focus,
				.wrapper.style1 textarea:focus {
					border-color: #1abc9c;
					box-shadow: 0 0 0 1px #1abc9c;
				}

			.wrapper.style1 .select-wrapper:before {
				color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style1 input[type="checkbox"] + label,
			.wrapper.style1 input[type="radio"] + label {
				color: #444;
			}

				.wrapper.style1 input[type="checkbox"] + label:before,
				.wrapper.style1 input[type="radio"] + label:before {
					background: rgba(144, 144, 144, 0.075);
					border-color: rgba(144, 144, 144, 0.25);
				}

			.wrapper.style1 input[type="checkbox"]:checked + label:before,
			.wrapper.style1 input[type="radio"]:checked + label:before {
				background-color: #1abc9c;
				border-color: #1abc9c;
				color: #fff;
			}

			.wrapper.style1 input[type="checkbox"]:focus + label:before,
			.wrapper.style1 input[type="radio"]:focus + label:before {
				border-color: #1abc9c;
				box-shadow: 0 0 0 1px #1abc9c;
			}

			.wrapper.style1 ::-webkit-input-placeholder {
				color: #bbb !important;
			}

			.wrapper.style1 :-moz-placeholder {
				color: #bbb !important;
			}

			.wrapper.style1 ::-moz-placeholder {
				color: #bbb !important;
			}

			.wrapper.style1 :-ms-input-placeholder {
				color: #bbb !important;
			}

			.wrapper.style1 .formerize-placeholder {
				color: #bbb !important;
			}

			.wrapper.style1 ul.alt li {
				border-top-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style1 header p {
				color: #bbb;
			}

			.wrapper.style1 table tbody tr {
				border-color: rgba(144, 144, 144, 0.25);
			}

				.wrapper.style1 table tbody tr:nth-child(2n + 1) {
					background-color: rgba(144, 144, 144, 0.075);
				}

			.wrapper.style1 table th {
				color: #1abc9c;
			}

			.wrapper.style1 table thead {
				border-bottom-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style1 table tfoot {
				border-top-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style1 table.alt tbody tr td {
				border-color: rgba(144, 144, 144, 0.25);
			}

		.wrapper.style2 {
			background-color: #fff;
			color: #444;
		}

			.wrapper.style2 input, .wrapper.style2 select, .wrapper.style2 textarea {
				color: #3498db;
			}

			.wrapper.style2 a {
				color: #3498db;
			}

			.wrapper.style2 strong, .wrapper.style2 b {
				color: #3498db;
			}

			.wrapper.style2 h1, .wrapper.style2 h2, .wrapper.style2 h3, .wrapper.style2 h4, .wrapper.style2 h5, .wrapper.style2 h6 {
				color: #3498db;
			}

			.wrapper.style2 blockquote {
				border-left-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style2 code {
				background: rgba(144, 144, 144, 0.075);
				border-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style2 hr {
				border-bottom-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style2 .box {
				border-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style2 input[type="submit"],
			.wrapper.style2 input[type="reset"],
			.wrapper.style2 input[type="button"],
			.wrapper.style2 button,
			.wrapper.style2 .button {
				background-color: #1abc9c;
				color: #fff !important;
			}

				.wrapper.style2 input[type="submit"]:hover,
				.wrapper.style2 input[type="reset"]:hover,
				.wrapper.style2 input[type="button"]:hover,
				.wrapper.style2 button:hover,
				.wrapper.style2 .button:hover {
					background-color: #1dd2af;
				}

				.wrapper.style2 input[type="submit"]:active,
				.wrapper.style2 input[type="reset"]:active,
				.wrapper.style2 input[type="button"]:active,
				.wrapper.style2 button:active,
				.wrapper.style2 .button:active {
					background-color: #17a689;
				}

				.wrapper.style2 input[type="submit"].alt,
				.wrapper.style2 input[type="reset"].alt,
				.wrapper.style2 input[type="button"].alt,
				.wrapper.style2 button.alt,
				.wrapper.style2 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
					color: #3498db !important;
				}

					.wrapper.style2 input[type="submit"].alt:hover,
					.wrapper.style2 input[type="reset"].alt:hover,
					.wrapper.style2 input[type="button"].alt:hover,
					.wrapper.style2 button.alt:hover,
					.wrapper.style2 .button.alt:hover {
						background-color: rgba(144, 144, 144, 0.075);
					}

					.wrapper.style2 input[type="submit"].alt:active,
					.wrapper.style2 input[type="reset"].alt:active,
					.wrapper.style2 input[type="button"].alt:active,
					.wrapper.style2 button.alt:active,
					.wrapper.style2 .button.alt:active {
						background-color: rgba(144, 144, 144, 0.2);
					}

					.wrapper.style2 input[type="submit"].alt.icon:before,
					.wrapper.style2 input[type="reset"].alt.icon:before,
					.wrapper.style2 input[type="button"].alt.icon:before,
					.wrapper.style2 button.alt.icon:before,
					.wrapper.style2 .button.alt.icon:before {
						color: #bbb;
					}

				.wrapper.style2 input[type="submit"].special,
				.wrapper.style2 input[type="reset"].special,
				.wrapper.style2 input[type="button"].special,
				.wrapper.style2 button.special,
				.wrapper.style2 .button.special {
					background-color: #3498db;
					color: #fff !important;
				}

			.wrapper.style2 label {
				color: #3498db;
			}

			.wrapper.style2 input[type="text"],
			.wrapper.style2 input[type="password"],
			.wrapper.style2 input[type="email"],
			.wrapper.style2 select,
			.wrapper.style2 textarea {
				background: rgba(144, 144, 144, 0.075);
				border-color: rgba(144, 144, 144, 0.25);
			}

				.wrapper.style2 input[type="text"]:focus,
				.wrapper.style2 input[type="password"]:focus,
				.wrapper.style2 input[type="email"]:focus,
				.wrapper.style2 select:focus,
				.wrapper.style2 textarea:focus {
					border-color: #3498db;
					box-shadow: 0 0 0 1px #3498db;
				}

			.wrapper.style2 .select-wrapper:before {
				color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style2 input[type="checkbox"] + label,
			.wrapper.style2 input[type="radio"] + label {
				color: #444;
			}

				.wrapper.style2 input[type="checkbox"] + label:before,
				.wrapper.style2 input[type="radio"] + label:before {
					background: rgba(144, 144, 144, 0.075);
					border-color: rgba(144, 144, 144, 0.25);
				}

			.wrapper.style2 input[type="checkbox"]:checked + label:before,
			.wrapper.style2 input[type="radio"]:checked + label:before {
				background-color: #3498db;
				border-color: #3498db;
				color: #fff;
			}

			.wrapper.style2 input[type="checkbox"]:focus + label:before,
			.wrapper.style2 input[type="radio"]:focus + label:before {
				border-color: #3498db;
				box-shadow: 0 0 0 1px #3498db;
			}

			.wrapper.style2 ::-webkit-input-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 :-moz-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 ::-moz-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 :-ms-input-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 .formerize-placeholder {
				color: #bbb !important;
			}

			.wrapper.style2 ul.alt li {
				border-top-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style2 header p {
				color: #bbb;
			}

			.wrapper.style2 table tbody tr {
				border-color: rgba(144, 144, 144, 0.25);
			}

				.wrapper.style2 table tbody tr:nth-child(2n + 1) {
					background-color: rgba(144, 144, 144, 0.075);
				}

			.wrapper.style2 table th {
				color: #3498db;
			}

			.wrapper.style2 table thead {
				border-bottom-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style2 table tfoot {
				border-top-color: rgba(144, 144, 144, 0.25);
			}

			.wrapper.style2 table.alt tbody tr td {
				border-color: rgba(144, 144, 144, 0.25);
			}

		@media screen and (max-width: 1280px) {

			.wrapper > .inner {
				width: 65em;
			}

		}

		@media screen and (max-width: 980px) {

			.wrapper > .inner {
				width: 100%;
			}

		}

/* Header */

	body {
		padding-top: 4.125em;
	}

	#header {
		background: #1c1c1c;
		color: rgba(255, 255, 255, 0.75);
		cursor: default;
		height: 4.25em;
		left: 0;
		line-height: 4.25em;
		position: fixed;
		text-align: right;
		top: 0;
		width: 100%;
		z-index: 10001;
	}

		#header .logo {
			display: inline-block;
			height: inherit;
			left: 1.25em;
			line-height: inherit;
			margin: 0;
			padding: 0;
			position: absolute;
			top: 0;
			color: #fff;
			font-size: 1.25em;
			text-decoration: none;
		}

			#header .logo strong {
				color: inherit;
				font-weight: 700;
			}

		#header nav a {
			-moz-transition: color 0.2s ease-in-out;
			-webkit-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
			transition: color 0.2s ease-in-out;
			display: inline-block;
			padding: 0 0.75em;
			color: inherit;
			text-decoration: none;
		}

			#header nav a:hover {
				color: #fff;
			}

			#header nav a[href="#menu"] {
				text-decoration: none;
				-webkit-tap-highlight-color: transparent;
			}

				#header nav a[href="#menu"]:before {
					content: "";
					-moz-osx-font-smoothing: grayscale;
					-webkit-font-smoothing: antialiased;
					font-family: FontAwesome;
					font-style: normal;
					font-weight: normal;
					text-transform: none !important;
				}

				#header nav a[href="#menu"]:before {
					margin: 0 0.5em 0 0;
				}

			#header nav a + a[href="#menu"]:last-child {
				border-left: solid 1px rgba(255, 255, 255, 0.25);
				padding-left: 1.25em;
				margin-left: 0.5em;
			}

			#header nav a:last-child {
				padding-right: 1.25em;
			}

			@media screen and (max-width: 736px) {

				#header nav a {
					padding: 0 0.5em;
				}

					#header nav a + a[href="#menu"]:last-child {
						padding-left: 1em;
						margin-left: 0.25em;
					}

					#header nav a:last-child {
						padding-right: 1em;
					}

			}

	@media screen and (max-width: 980px) {

		body {
			padding-top: 44px;
		}

		#header {
			height: 44px;
			line-height: 44px;
		}

			#header .logo {
				left: 1em;
				font-size: 1em;
			}

	}

	@media screen and (max-width: 480px) {

		#header {
			min-width: 320px;
		}

	}

/* Menu */

	#menu {
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		-ms-transform: translateX(100%);
		transform: translateX(100%);
		-moz-transition: -moz-transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
		-webkit-transition: -webkit-transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
		-ms-transition: -ms-transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
		transition: transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
		-webkit-overflow-scrolling: touch;
		background: #1c1c1c;
		box-shadow: none;
		color: #fff;
		height: 100%;
		max-width: 80%;
		overflow-y: auto;
		padding: 3em 2em;
		position: fixed;
		right: 0;
		top: 0;
		visibility: hidden;
		width: 20em;
		z-index: 10002;
	}

		#menu > ul {
			margin: 0 0 1em 0;
		}

			#menu > ul.links {
				list-style: none;
				padding: 0;
			}

				#menu > ul.links > li {
					padding: 0;
				}

					#menu > ul.links > li > a:not(.button) {
						border: 0;
						border-top: solid 1px rgba(255, 255, 255, 0.25);
						color: inherit;
						display: block;
						line-height: 3.5em;
						text-decoration: none;
					}

					#menu > ul.links > li > .button {
						display: block;
						margin: 0.5em 0 0 0;
					}

					#menu > ul.links > li:first-child > a:not(.button) {
						border-top: 0 !important;
					}

		#menu .close {
			text-decoration: none;
			-moz-transition: color 0.2s ease-in-out;
			-webkit-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
			transition: color 0.2s ease-in-out;
			-webkit-tap-highlight-color: transparent;
			border: 0;
			color: rgba(255, 255, 255, 0.5);
			cursor: pointer;
			display: block;
			height: 3.25em;
			line-height: 3.25em;
			padding-right: 1.25em;
			position: absolute;
			right: 0;
			text-align: right;
			top: 0;
			vertical-align: middle;
			width: 7em;
		}

			#menu .close:before {
				content: "";
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			#menu .close:before {
				font-size: 1.25em;
			}

			#menu .close:hover {
				color: #fff;
			}

			@media screen and (max-width: 736px) {

				#menu .close {
					height: 4em;
					line-height: 4em;
				}

			}

		#menu.visible {
			-moz-transform: translateX(0);
			-webkit-transform: translateX(0);
			-ms-transform: translateX(0);
			transform: translateX(0);
			box-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);
			visibility: visible;
		}

		@media screen and (max-width: 736px) {

			#menu {
				padding: 2.5em 1.75em;
			}

		}

/* Banner */

	#banner {
		background-color: #3498db;
		color: rgba(255, 255, 255, 0.75);
		text-align: center;
		cursor: default;
		padding: 10em 4em 9em 4em;
	}

		#banner input, #banner select, #banner textarea {
			color: #fff;
		}

		#banner a {
			color: #fff;
		}

		#banner strong, #banner b {
			color: #fff;
		}

		#banner h1, #banner h2, #banner h3, #banner h4, #banner h5, #banner h6 {
			color: #fff;
		}

		#banner blockquote {
			border-left-color: rgba(255, 255, 255, 0.25);
		}

		#banner code {
			background: rgba(255, 255, 255, 0.075);
			border-color: rgba(255, 255, 255, 0.25);
		}

		#banner hr {
			border-bottom-color: rgba(255, 255, 255, 0.25);
		}

		#banner .box {
			border-color: rgba(255, 255, 255, 0.25);
		}

		#banner input[type="submit"],
		#banner input[type="reset"],
		#banner input[type="button"],
		#banner button,
		#banner .button {
			background-color: #1abc9c;
			color: #fff !important;
		}

			#banner input[type="submit"]:hover,
			#banner input[type="reset"]:hover,
			#banner input[type="button"]:hover,
			#banner button:hover,
			#banner .button:hover {
				background-color: #1dd2af;
			}

			#banner input[type="submit"]:active,
			#banner input[type="reset"]:active,
			#banner input[type="button"]:active,
			#banner button:active,
			#banner .button:active {
				background-color: #17a689;
			}

			#banner input[type="submit"].alt,
			#banner input[type="reset"].alt,
			#banner input[type="button"].alt,
			#banner button.alt,
			#banner .button.alt {
				background-color: transparent;
				box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
				color: #fff !important;
			}

				#banner input[type="submit"].alt:hover,
				#banner input[type="reset"].alt:hover,
				#banner input[type="button"].alt:hover,
				#banner button.alt:hover,
				#banner .button.alt:hover {
					background-color: rgba(255, 255, 255, 0.075);
				}

				#banner input[type="submit"].alt:active,
				#banner input[type="reset"].alt:active,
				#banner input[type="button"].alt:active,
				#banner button.alt:active,
				#banner .button.alt:active {
					background-color: rgba(255, 255, 255, 0.2);
				}

				#banner input[type="submit"].alt.icon:before,
				#banner input[type="reset"].alt.icon:before,
				#banner input[type="button"].alt.icon:before,
				#banner button.alt.icon:before,
				#banner .button.alt.icon:before {
					color: rgba(255, 255, 255, 0.5);
				}

			#banner input[type="submit"].special,
			#banner input[type="reset"].special,
			#banner input[type="button"].special,
			#banner button.special,
			#banner .button.special {
				background-color: #fff;
				color: #3498db !important;
			}

		#banner label {
			color: #fff;
		}

		#banner input[type="text"],
		#banner input[type="password"],
		#banner input[type="email"],
		#banner select,
		#banner textarea {
			background: rgba(255, 255, 255, 0.075);
			border-color: rgba(255, 255, 255, 0.25);
		}

			#banner input[type="text"]:focus,
			#banner input[type="password"]:focus,
			#banner input[type="email"]:focus,
			#banner select:focus,
			#banner textarea:focus {
				border-color: #fff;
				box-shadow: 0 0 0 1px #fff;
			}

		#banner .select-wrapper:before {
			color: rgba(255, 255, 255, 0.25);
		}

		#banner input[type="checkbox"] + label,
		#banner input[type="radio"] + label {
			color: rgba(255, 255, 255, 0.75);
		}

			#banner input[type="checkbox"] + label:before,
			#banner input[type="radio"] + label:before {
				background: rgba(255, 255, 255, 0.075);
				border-color: rgba(255, 255, 255, 0.25);
			}

		#banner input[type="checkbox"]:checked + label:before,
		#banner input[type="radio"]:checked + label:before {
			background-color: #fff;
			border-color: #fff;
			color: #3498db;
		}

		#banner input[type="checkbox"]:focus + label:before,
		#banner input[type="radio"]:focus + label:before {
			border-color: #fff;
			box-shadow: 0 0 0 1px #fff;
		}

		#banner ::-webkit-input-placeholder {
			color: rgba(255, 255, 255, 0.5) !important;
		}

		#banner :-moz-placeholder {
			color: rgba(255, 255, 255, 0.5) !important;
		}

		#banner ::-moz-placeholder {
			color: rgba(255, 255, 255, 0.5) !important;
		}

		#banner :-ms-input-placeholder {
			color: rgba(255, 255, 255, 0.5) !important;
		}

		#banner .formerize-placeholder {
			color: rgba(255, 255, 255, 0.5) !important;
		}

		#banner ul.alt li {
			border-top-color: rgba(255, 255, 255, 0.25);
		}

		#banner header p {
			color: rgba(255, 255, 255, 0.5);
		}

		#banner table tbody tr {
			border-color: rgba(255, 255, 255, 0.25);
		}

			#banner table tbody tr:nth-child(2n + 1) {
				background-color: rgba(255, 255, 255, 0.075);
			}

		#banner table th {
			color: #fff;
		}

		#banner table thead {
			border-bottom-color: rgba(255, 255, 255, 0.25);
		}

		#banner table tfoot {
			border-top-color: rgba(255, 255, 255, 0.25);
		}

		#banner table.alt tbody tr td {
			border-color: rgba(255, 255, 255, 0.25);
		}

		#banner h1 {
			font-size: 3em;
			line-height: 1.45;
			margin: 0 0 0.75em 0;
		}

		#banner > .inner {
			opacity: 1;
			-moz-transform: none;
			-webkit-transform: none;
			-ms-transform: none;
			transform: none;
			-moz-transition: opacity 1s ease, -moz-transform 1s ease;
			-webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
			-ms-transition: opacity 1s ease, -ms-transform 1s ease;
			transition: opacity 1s ease, transform 1s ease;
		}

			#banner > .inner > :last-child {
				margin-bottom: 0;
			}

		body.is-loading #banner > .inner {
			opacity: 0;
			-moz-transform: translateY(1em);
			-webkit-transform: translateY(1em);
			-ms-transform: translateY(1em);
			transform: translateY(1em);
		}

		@media screen and (max-width: 1280px) {

			#banner h1 {
				font-size: 2.75em;
			}

				#banner h1 br {
					display: none;
				}

		}

		@media screen and (max-width: 736px) {

			#banner {
				padding: 5em 1.5em 4em 1.5em;
			}

				#banner h1 {
					font-size: 2em;
				}

		}

/* Main */

	#main {
		padding: 4em 0 2em 0;
	}

		#main .inner {
			max-width: 60em;
			margin: 0 auto;
		}

			#main .inner header p {
				font-size: 1em;
				font-style: italic;
				border-top: 1px solid rgba(144, 144, 144, 0.25);
				border-bottom: 1px solid rgba(144, 144, 144, 0.25);
				padding: .5em 0;
			}

		@media screen and (max-width: 980px) {

			#main {
				padding: 3em 0 1em 0;
			}

				#main .inner {
					width: 90%;
				}

		}

	.post {
		display: -ms-flexbox;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-ms-flex-align: stretch;
		-moz-align-items: stretch;
		-webkit-align-items: stretch;
		-ms-align-items: stretch;
		align-items: stretch;
		-ms-flex-pack: end;
		min-height: -webkit-calc(100vh - 4.25em);
		min-height: -moz-calc(100vh - 4.25em);
		min-height: calc(100vh - 4.25em);
		position: relative;
	}

		body.is-ie .post {
			min-height: 0;
		}

		.post .content {
			-moz-transition: background 0.2s ease-in-out;
			-webkit-transition: background 0.2s ease-in-out;
			-ms-transition: background 0.2s ease-in-out;
			transition: background 0.2s ease-in-out;
			-moz-order: 1;
			-webkit-order: 1;
			-ms-order: 1;
			order: 1;
			width: 50%;
			display: block;
			background: #FFF;
			padding: 8em;
			text-align: right;
			position: relative;
		}

			.post .content:before {
				content: '';
				display: inline-block;
				height: 100%;
				vertical-align: middle;
				margin-right: -0.25em;
			/* Adjusts for spacing */
		}

			.post .content .inner {
				display: inline-block;
				vertical-align: middle;
			}

			.post .content header h2 {
				font-size: 2.35em;
			}

			.post .content header p {
				font-size: 1em;
				font-style: italic;
				border-top: 1px solid rgba(144, 144, 144, 0.25);
				border-bottom: 1px solid rgba(144, 144, 144, 0.25);
				padding: .5em 0;
			}

			.post .content .button {
				margin: 0;
			}

			.post .content .postnav {
				position: absolute;
				left: 2em;
				bottom: 2em;
			}

				.post .content .postnav .prev, .post .content .postnav .next {
					text-decoration: none;
					display: block;
					border: 1px solid rgba(144, 144, 144, 0.25);
					width: 2em;
					height: 2em;
					line-height: 2em;
					text-align: center;
				}

					.post .content .postnav .prev:hover, .post .content .postnav .next:hover {
						background: rgba(144, 144, 144, 0.075);
					}

					.post .content .postnav .prev.disabled, .post .content .postnav .next.disabled {
						color: #bbb;
						pointer-events: none;
					}

				.post .content .postnav .prev {
					border-bottom: none;
				}

		.post .image {
			-ms-flex-order: 2;
			-moz-order: 2;
			-webkit-order: 2;
			-ms-order: 2;
			order: 2;
			width: 50%;
			display: block;
			margin: 0;
			position: relative;
			overflow: hidden;
			background-color: #ffffff;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}

			.post .image img {
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;
				width: auto;
				display: none;
			}

		.post.alt .content {
			-ms-flex-order: 2;
			-moz-order: 2;
			-webkit-order: 2;
			-ms-order: 2;
			order: 2;
			text-align: left;
		}

			.post.alt .content .postnav {
				right: 2em;
				left: initial;
			}

				@media screen and (max-width: 1280px) {

					.post.alt .content .postnav {
						right: 1em;
					}

				}

		.post.alt .image {
			-ms-flex-order: 1;
			-moz-order: 1;
			-webkit-order: 1;
			-ms-order: 1;
			order: 1;
		}

			.post.alt .image img {
				right: initial;
				left: 0;
			}

		.post.style1 {
			background-color: #fff;
			color: #444;
		}

			.post.style1 input, .post.style1 select, .post.style1 textarea {
				color: #1abc9c;
			}

			.post.style1 a {
				color: #1abc9c;
			}

			.post.style1 strong, .post.style1 b {
				color: #1abc9c;
			}

			.post.style1 h1, .post.style1 h2, .post.style1 h3, .post.style1 h4, .post.style1 h5, .post.style1 h6 {
				color: #1abc9c;
			}

			.post.style1 blockquote {
				border-left-color: rgba(144, 144, 144, 0.25);
			}

			.post.style1 code {
				background: rgba(144, 144, 144, 0.075);
				border-color: rgba(144, 144, 144, 0.25);
			}

			.post.style1 hr {
				border-bottom-color: rgba(144, 144, 144, 0.25);
			}

			.post.style1 input[type="submit"],
			.post.style1 input[type="reset"],
			.post.style1 input[type="button"],
			.post.style1 button,
			.post.style1 .button {
				background-color: #1abc9c;
				color: #fff !important;
			}

				.post.style1 input[type="submit"]:hover,
				.post.style1 input[type="reset"]:hover,
				.post.style1 input[type="button"]:hover,
				.post.style1 button:hover,
				.post.style1 .button:hover {
					background-color: #1dd2af;
				}

				.post.style1 input[type="submit"]:active,
				.post.style1 input[type="reset"]:active,
				.post.style1 input[type="button"]:active,
				.post.style1 button:active,
				.post.style1 .button:active {
					background-color: #17a689;
				}

				.post.style1 input[type="submit"].alt,
				.post.style1 input[type="reset"].alt,
				.post.style1 input[type="button"].alt,
				.post.style1 button.alt,
				.post.style1 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
					color: #1abc9c !important;
				}

					.post.style1 input[type="submit"].alt:hover,
					.post.style1 input[type="reset"].alt:hover,
					.post.style1 input[type="button"].alt:hover,
					.post.style1 button.alt:hover,
					.post.style1 .button.alt:hover {
						background-color: rgba(144, 144, 144, 0.075);
					}

					.post.style1 input[type="submit"].alt:active,
					.post.style1 input[type="reset"].alt:active,
					.post.style1 input[type="button"].alt:active,
					.post.style1 button.alt:active,
					.post.style1 .button.alt:active {
						background-color: rgba(144, 144, 144, 0.2);
					}

					.post.style1 input[type="submit"].alt.icon:before,
					.post.style1 input[type="reset"].alt.icon:before,
					.post.style1 input[type="button"].alt.icon:before,
					.post.style1 button.alt.icon:before,
					.post.style1 .button.alt.icon:before {
						color: #bbb;
					}

				.post.style1 input[type="submit"].special,
				.post.style1 input[type="reset"].special,
				.post.style1 input[type="button"].special,
				.post.style1 button.special,
				.post.style1 .button.special {
					background-color: #1abc9c;
					color: #fff !important;
				}

			.post.style1.invert {
				background-color: #1abc9c;
				color: rgba(255, 255, 255, 0.75);
			}

				.post.style1.invert input, .post.style1.invert select, .post.style1.invert textarea {
					color: #fff;
				}

				.post.style1.invert a {
					color: #fff;
				}

				.post.style1.invert strong, .post.style1.invert b {
					color: #fff;
				}

				.post.style1.invert h1, .post.style1.invert h2, .post.style1.invert h3, .post.style1.invert h4, .post.style1.invert h5, .post.style1.invert h6 {
					color: #fff;
				}

				.post.style1.invert blockquote {
					border-left-color: rgba(255, 255, 255, 0.25);
				}

				.post.style1.invert code {
					background: rgba(255, 255, 255, 0.075);
					border-color: rgba(255, 255, 255, 0.25);
				}

				.post.style1.invert hr {
					border-bottom-color: rgba(255, 255, 255, 0.25);
				}

				.post.style1.invert input[type="submit"],
				.post.style1.invert input[type="reset"],
				.post.style1.invert input[type="button"],
				.post.style1.invert button,
				.post.style1.invert .button {
					background-color: #fff;
					color: #1abc9c !important;
				}

					.post.style1.invert input[type="submit"].alt,
					.post.style1.invert input[type="reset"].alt,
					.post.style1.invert input[type="button"].alt,
					.post.style1.invert button.alt,
					.post.style1.invert .button.alt {
						background-color: transparent;
						box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
						color: #fff !important;
					}

						.post.style1.invert input[type="submit"].alt:hover,
						.post.style1.invert input[type="reset"].alt:hover,
						.post.style1.invert input[type="button"].alt:hover,
						.post.style1.invert button.alt:hover,
						.post.style1.invert .button.alt:hover {
							background-color: rgba(255, 255, 255, 0.075);
						}

						.post.style1.invert input[type="submit"].alt:active,
						.post.style1.invert input[type="reset"].alt:active,
						.post.style1.invert input[type="button"].alt:active,
						.post.style1.invert button.alt:active,
						.post.style1.invert .button.alt:active {
							background-color: rgba(255, 255, 255, 0.2);
						}

						.post.style1.invert input[type="submit"].alt.icon:before,
						.post.style1.invert input[type="reset"].alt.icon:before,
						.post.style1.invert input[type="button"].alt.icon:before,
						.post.style1.invert button.alt.icon:before,
						.post.style1.invert .button.alt.icon:before {
							color: rgba(255, 255, 255, 0.5);
						}

					.post.style1.invert input[type="submit"].special,
					.post.style1.invert input[type="reset"].special,
					.post.style1.invert input[type="button"].special,
					.post.style1.invert button.special,
					.post.style1.invert .button.special {
						background-color: #fff;
						color: #1abc9c !important;
					}

				.post.style1.invert .content {
					background: #1abc9c;
				}

					.post.style1.invert .content header p {
						color: rgba(255, 255, 255, 0.5);
						border-top: 1px solid rgba(255, 255, 255, 0.25);
						border-bottom: 1px solid rgba(255, 255, 255, 0.25);
					}

					.post.style1.invert .content .postnav .prev, .post.style1.invert .content .postnav .next {
						border: 1px solid rgba(255, 255, 255, 0.25);
					}

						.post.style1.invert .content .postnav .prev:hover, .post.style1.invert .content .postnav .next:hover {
							background: rgba(255, 255, 255, 0.075);
						}

						.post.style1.invert .content .postnav .prev.disabled, .post.style1.invert .content .postnav .next.disabled {
							color: rgba(255, 255, 255, 0.5);
						}

				.post.style1.invert .image {
					background-color: #1abc9c;
				}

		.post.style2 {
			background-color: #fff;
			color: #444;
		}

			.post.style2 input, .post.style2 select, .post.style2 textarea {
				color: #3498db;
			}

			.post.style2 a {
				color: #3498db;
			}

			.post.style2 strong, .post.style2 b {
				color: #3498db;
			}

			.post.style2 h1, .post.style2 h2, .post.style2 h3, .post.style2 h4, .post.style2 h5, .post.style2 h6 {
				color: #3498db;
			}

			.post.style2 blockquote {
				border-left-color: rgba(144, 144, 144, 0.25);
			}

			.post.style2 code {
				background: rgba(144, 144, 144, 0.075);
				border-color: rgba(144, 144, 144, 0.25);
			}

			.post.style2 hr {
				border-bottom-color: rgba(144, 144, 144, 0.25);
			}

			.post.style2 input[type="submit"],
			.post.style2 input[type="reset"],
			.post.style2 input[type="button"],
			.post.style2 button,
			.post.style2 .button {
				background-color: #1abc9c;
				color: #fff !important;
			}

				.post.style2 input[type="submit"]:hover,
				.post.style2 input[type="reset"]:hover,
				.post.style2 input[type="button"]:hover,
				.post.style2 button:hover,
				.post.style2 .button:hover {
					background-color: #1dd2af;
				}

				.post.style2 input[type="submit"]:active,
				.post.style2 input[type="reset"]:active,
				.post.style2 input[type="button"]:active,
				.post.style2 button:active,
				.post.style2 .button:active {
					background-color: #17a689;
				}

				.post.style2 input[type="submit"].alt,
				.post.style2 input[type="reset"].alt,
				.post.style2 input[type="button"].alt,
				.post.style2 button.alt,
				.post.style2 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
					color: #3498db !important;
				}

					.post.style2 input[type="submit"].alt:hover,
					.post.style2 input[type="reset"].alt:hover,
					.post.style2 input[type="button"].alt:hover,
					.post.style2 button.alt:hover,
					.post.style2 .button.alt:hover {
						background-color: rgba(144, 144, 144, 0.075);
					}

					.post.style2 input[type="submit"].alt:active,
					.post.style2 input[type="reset"].alt:active,
					.post.style2 input[type="button"].alt:active,
					.post.style2 button.alt:active,
					.post.style2 .button.alt:active {
						background-color: rgba(144, 144, 144, 0.2);
					}

					.post.style2 input[type="submit"].alt.icon:before,
					.post.style2 input[type="reset"].alt.icon:before,
					.post.style2 input[type="button"].alt.icon:before,
					.post.style2 button.alt.icon:before,
					.post.style2 .button.alt.icon:before {
						color: #bbb;
					}

				.post.style2 input[type="submit"].special,
				.post.style2 input[type="reset"].special,
				.post.style2 input[type="button"].special,
				.post.style2 button.special,
				.post.style2 .button.special {
					background-color: #3498db;
					color: #fff !important;
				}

			.post.style2.invert {
				background-color: #3498db;
				color: rgba(255, 255, 255, 0.75);
			}

				.post.style2.invert input, .post.style2.invert select, .post.style2.invert textarea {
					color: #fff;
				}

				.post.style2.invert a {
					color: #fff;
				}

				.post.style2.invert strong, .post.style2.invert b {
					color: #fff;
				}

				.post.style2.invert h1, .post.style2.invert h2, .post.style2.invert h3, .post.style2.invert h4, .post.style2.invert h5, .post.style2.invert h6 {
					color: #fff;
				}

				.post.style2.invert blockquote {
					border-left-color: rgba(255, 255, 255, 0.25);
				}

				.post.style2.invert code {
					background: rgba(255, 255, 255, 0.075);
					border-color: rgba(255, 255, 255, 0.25);
				}

				.post.style2.invert hr {
					border-bottom-color: rgba(255, 255, 255, 0.25);
				}

				.post.style2.invert input[type="submit"],
				.post.style2.invert input[type="reset"],
				.post.style2.invert input[type="button"],
				.post.style2.invert button,
				.post.style2.invert .button {
					background-color: #1abc9c;
					color: #fff !important;
				}

					.post.style2.invert input[type="submit"]:hover,
					.post.style2.invert input[type="reset"]:hover,
					.post.style2.invert input[type="button"]:hover,
					.post.style2.invert button:hover,
					.post.style2.invert .button:hover {
						background-color: #1dd2af;
					}

					.post.style2.invert input[type="submit"]:active,
					.post.style2.invert input[type="reset"]:active,
					.post.style2.invert input[type="button"]:active,
					.post.style2.invert button:active,
					.post.style2.invert .button:active {
						background-color: #17a689;
					}

					.post.style2.invert input[type="submit"].alt,
					.post.style2.invert input[type="reset"].alt,
					.post.style2.invert input[type="button"].alt,
					.post.style2.invert button.alt,
					.post.style2.invert .button.alt {
						background-color: transparent;
						box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
						color: #fff !important;
					}

						.post.style2.invert input[type="submit"].alt:hover,
						.post.style2.invert input[type="reset"].alt:hover,
						.post.style2.invert input[type="button"].alt:hover,
						.post.style2.invert button.alt:hover,
						.post.style2.invert .button.alt:hover {
							background-color: rgba(255, 255, 255, 0.075);
						}

						.post.style2.invert input[type="submit"].alt:active,
						.post.style2.invert input[type="reset"].alt:active,
						.post.style2.invert input[type="button"].alt:active,
						.post.style2.invert button.alt:active,
						.post.style2.invert .button.alt:active {
							background-color: rgba(255, 255, 255, 0.2);
						}

						.post.style2.invert input[type="submit"].alt.icon:before,
						.post.style2.invert input[type="reset"].alt.icon:before,
						.post.style2.invert input[type="button"].alt.icon:before,
						.post.style2.invert button.alt.icon:before,
						.post.style2.invert .button.alt.icon:before {
							color: rgba(255, 255, 255, 0.5);
						}

					.post.style2.invert input[type="submit"].special,
					.post.style2.invert input[type="reset"].special,
					.post.style2.invert input[type="button"].special,
					.post.style2.invert button.special,
					.post.style2.invert .button.special {
						background-color: #fff;
						color: #3498db !important;
					}

				.post.style2.invert .content {
					background: #3498db;
				}

					.post.style2.invert .content header p {
						color: rgba(255, 255, 255, 0.5);
						border-top: 1px solid rgba(255, 255, 255, 0.25);
						border-bottom: 1px solid rgba(255, 255, 255, 0.25);
					}

					.post.style2.invert .content .postnav .prev, .post.style2.invert .content .postnav .next {
						border: 1px solid rgba(255, 255, 255, 0.25);
					}

						.post.style2.invert .content .postnav .prev:hover, .post.style2.invert .content .postnav .next:hover {
							background: rgba(255, 255, 255, 0.075);
						}

						.post.style2.invert .content .postnav .prev.disabled, .post.style2.invert .content .postnav .next.disabled {
							color: rgba(255, 255, 255, 0.5);
						}

				.post.style2.invert .image {
					background-color: #3498db;
				}

		.post.style3 {
			background-color: #fff;
			color: #444;
		}

			.post.style3 input, .post.style3 select, .post.style3 textarea {
				color: #9b59b6;
			}

			.post.style3 a {
				color: #9b59b6;
			}

			.post.style3 strong, .post.style3 b {
				color: #9b59b6;
			}

			.post.style3 h1, .post.style3 h2, .post.style3 h3, .post.style3 h4, .post.style3 h5, .post.style3 h6 {
				color: #9b59b6;
			}

			.post.style3 blockquote {
				border-left-color: rgba(144, 144, 144, 0.25);
			}

			.post.style3 code {
				background: rgba(144, 144, 144, 0.075);
				border-color: rgba(144, 144, 144, 0.25);
			}

			.post.style3 hr {
				border-bottom-color: rgba(144, 144, 144, 0.25);
			}

			.post.style3 input[type="submit"],
			.post.style3 input[type="reset"],
			.post.style3 input[type="button"],
			.post.style3 button,
			.post.style3 .button {
				background-color: #1abc9c;
				color: #fff !important;
			}

				.post.style3 input[type="submit"]:hover,
				.post.style3 input[type="reset"]:hover,
				.post.style3 input[type="button"]:hover,
				.post.style3 button:hover,
				.post.style3 .button:hover {
					background-color: #1dd2af;
				}

				.post.style3 input[type="submit"]:active,
				.post.style3 input[type="reset"]:active,
				.post.style3 input[type="button"]:active,
				.post.style3 button:active,
				.post.style3 .button:active {
					background-color: #17a689;
				}

				.post.style3 input[type="submit"].alt,
				.post.style3 input[type="reset"].alt,
				.post.style3 input[type="button"].alt,
				.post.style3 button.alt,
				.post.style3 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
					color: #9b59b6 !important;
				}

					.post.style3 input[type="submit"].alt:hover,
					.post.style3 input[type="reset"].alt:hover,
					.post.style3 input[type="button"].alt:hover,
					.post.style3 button.alt:hover,
					.post.style3 .button.alt:hover {
						background-color: rgba(144, 144, 144, 0.075);
					}

					.post.style3 input[type="submit"].alt:active,
					.post.style3 input[type="reset"].alt:active,
					.post.style3 input[type="button"].alt:active,
					.post.style3 button.alt:active,
					.post.style3 .button.alt:active {
						background-color: rgba(144, 144, 144, 0.2);
					}

					.post.style3 input[type="submit"].alt.icon:before,
					.post.style3 input[type="reset"].alt.icon:before,
					.post.style3 input[type="button"].alt.icon:before,
					.post.style3 button.alt.icon:before,
					.post.style3 .button.alt.icon:before {
						color: #bbb;
					}

				.post.style3 input[type="submit"].special,
				.post.style3 input[type="reset"].special,
				.post.style3 input[type="button"].special,
				.post.style3 button.special,
				.post.style3 .button.special {
					background-color: #9b59b6;
					color: #fff !important;
				}

			.post.style3.invert {
				background-color: #9b59b6;
				color: rgba(255, 255, 255, 0.75);
			}

				.post.style3.invert input, .post.style3.invert select, .post.style3.invert textarea {
					color: #fff;
				}

				.post.style3.invert a {
					color: #fff;
				}

				.post.style3.invert strong, .post.style3.invert b {
					color: #fff;
				}

				.post.style3.invert h1, .post.style3.invert h2, .post.style3.invert h3, .post.style3.invert h4, .post.style3.invert h5, .post.style3.invert h6 {
					color: #fff;
				}

				.post.style3.invert blockquote {
					border-left-color: rgba(255, 255, 255, 0.25);
				}

				.post.style3.invert code {
					background: rgba(255, 255, 255, 0.075);
					border-color: rgba(255, 255, 255, 0.25);
				}

				.post.style3.invert hr {
					border-bottom-color: rgba(255, 255, 255, 0.25);
				}

				.post.style3.invert input[type="submit"],
				.post.style3.invert input[type="reset"],
				.post.style3.invert input[type="button"],
				.post.style3.invert button,
				.post.style3.invert .button {
					background-color: #1abc9c;
					color: #fff !important;
				}

					.post.style3.invert input[type="submit"]:hover,
					.post.style3.invert input[type="reset"]:hover,
					.post.style3.invert input[type="button"]:hover,
					.post.style3.invert button:hover,
					.post.style3.invert .button:hover {
						background-color: #1dd2af;
					}

					.post.style3.invert input[type="submit"]:active,
					.post.style3.invert input[type="reset"]:active,
					.post.style3.invert input[type="button"]:active,
					.post.style3.invert button:active,
					.post.style3.invert .button:active {
						background-color: #17a689;
					}

					.post.style3.invert input[type="submit"].alt,
					.post.style3.invert input[type="reset"].alt,
					.post.style3.invert input[type="button"].alt,
					.post.style3.invert button.alt,
					.post.style3.invert .button.alt {
						background-color: transparent;
						box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
						color: #fff !important;
					}

						.post.style3.invert input[type="submit"].alt:hover,
						.post.style3.invert input[type="reset"].alt:hover,
						.post.style3.invert input[type="button"].alt:hover,
						.post.style3.invert button.alt:hover,
						.post.style3.invert .button.alt:hover {
							background-color: rgba(255, 255, 255, 0.075);
						}

						.post.style3.invert input[type="submit"].alt:active,
						.post.style3.invert input[type="reset"].alt:active,
						.post.style3.invert input[type="button"].alt:active,
						.post.style3.invert button.alt:active,
						.post.style3.invert .button.alt:active {
							background-color: rgba(255, 255, 255, 0.2);
						}

						.post.style3.invert input[type="submit"].alt.icon:before,
						.post.style3.invert input[type="reset"].alt.icon:before,
						.post.style3.invert input[type="button"].alt.icon:before,
						.post.style3.invert button.alt.icon:before,
						.post.style3.invert .button.alt.icon:before {
							color: rgba(255, 255, 255, 0.5);
						}

					.post.style3.invert input[type="submit"].special,
					.post.style3.invert input[type="reset"].special,
					.post.style3.invert input[type="button"].special,
					.post.style3.invert button.special,
					.post.style3.invert .button.special {
						background-color: #fff;
						color: #9b59b6 !important;
					}

				.post.style3.invert .content {
					background: #9b59b6;
				}

					.post.style3.invert .content header p {
						color: rgba(255, 255, 255, 0.5);
						border-top: 1px solid rgba(255, 255, 255, 0.25);
						border-bottom: 1px solid rgba(255, 255, 255, 0.25);
					}

					.post.style3.invert .content .postnav .prev, .post.style3.invert .content .postnav .next {
						border: 1px solid rgba(255, 255, 255, 0.25);
					}

						.post.style3.invert .content .postnav .prev:hover, .post.style3.invert .content .postnav .next:hover {
							background: rgba(255, 255, 255, 0.075);
						}

						.post.style3.invert .content .postnav .prev.disabled, .post.style3.invert .content .postnav .next.disabled {
							color: rgba(255, 255, 255, 0.5);
						}

				.post.style3.invert .image {
					background-color: #9b59b6;
				}

		@media screen and (max-width: 1280px) {

			.post .content {
				padding: 4em;
			}

				.post .content .postnav {
					left: 1em;
					bottom: 1em;
				}

		}

		@media screen and (max-width: 980px) {

			.post {
				-ms-flex-direction: column;
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				height: auto;
				min-height: 0;
			}

				.post .image {
					-ms-flex-order: 1;
					-moz-order: 1;
					-webkit-order: 1;
					-ms-order: 1;
					order: 1;
					width: 100%;
					overflow: auto;
					background: none !important;
				}

					.post .image img {
						position: relative;
						width: 100%;
						height: auto;
						display: block;
					}

				.post .content {
					-ms-flex-order: 2;
					-moz-order: 2;
					-webkit-order: 2;
					-ms-order: 2;
					order: 2;
					width: 100%;
					text-align: left;
				}

					.post .content .postnav {
						display: none;
					}

				.post.alt .image img {
					left: initial;
				}

				.post.alt .content {
					text-align: left;
				}

		}

		@media screen and (max-width: 736px) {

			.post .content {
				padding: 2em 1.5em 3em 1.5em;
			}

				.post .content header h2 {
					font-size: 1.75em;
				}

			.post .button {
				width: 100%;
			}

		}

/* Footer */

	#footer {
		padding: 4em 0 2em 0;
		background: #1c1c1c;
		text-align: center;
	}

		#footer a {
			color: rgba(255, 255, 255, 0.75);
		}

			#footer a:hover {
				color: #fff;
			}

		#footer .copyright {
			color: rgba(255, 255, 255, 0.5);
			font-size: 0.9em;
			margin: 0 0 2em 0;
			padding: 0;
		}

		@media screen and (max-width: 736px) {

			#footer {
				padding: 3em 0 1em 0;
			}

		}
</style>

