<template>
    <!-- Tombol Scroll Atas -->
    <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
</template>

<script>
import jQuery from 'jquery';

export default {
    name: "ScrollToTop",
    mounted() {
        (function ($) {
            "use strict";
            $(document).ready(function () {
                "use strict";

                var progressPath = document.querySelector(
                    ".progress-wrap path"
                );
                var pathLength = progressPath.getTotalLength();
                progressPath.style.transition =
                    progressPath.style.WebkitTransition = "none";
                progressPath.style.strokeDasharray =
                    pathLength + " " + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition =
                    progressPath.style.WebkitTransition =
                    "stroke-dashoffset 10ms linear";
                var updateProgress = function () {
                    var scroll = $(window).scrollTop();
                    var height = $(document).height() - $(window).height();
                    var progress =
                        pathLength - (scroll * pathLength) / height;
                    progressPath.style.strokeDashoffset = progress;
                };
                updateProgress();
                $(window).scroll(updateProgress);
                var offset = 50;
                var duration = 550;
                jQuery(window).on("scroll", function () {
                    if (jQuery(this).scrollTop() > offset) {
                        jQuery(".progress-wrap").addClass(
                            "active-progress"
                        );
                    } else {
                        jQuery(".progress-wrap").removeClass(
                            "active-progress"
                        );
                    }
                });
                jQuery(".progress-wrap").on("click", function (event) {
                    event.preventDefault();
                    jQuery("html, body").animate(
                        {
                            scrollTop: 0,
                        },
                        duration
                    );
                    return false;
                });
            });
        })(jQuery);
    },
};
</script>

<style scoped>
.progress-wrap {
    position: fixed;
    right: 50px;
    bottom: 50px;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    background-color: #198754;
}

.progress-wrap.active-progress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.progress-wrap::after {
    position: absolute;
    content: "↑";
    text-align: center;
    line-height: 46px;
    font-size: 24px;
    color: #ffc107;
    left: 0;
    top: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    z-index: 1;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.progress-wrap:hover::after {
    opacity: 0;
}

.progress-wrap::before {
    position: absolute;
    content: "↑";
    text-align: center;
    line-height: 46px;
    font-size: 24px;
    opacity: 0;
    background-image: linear-gradient(298deg, #ffffff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    left: 0;
    top: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    z-index: 2;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.progress-wrap:hover::before {
    opacity: 1;
}

.progress-wrap svg path {
    fill: none;
}

.progress-wrap svg.progress-circle path {
    stroke: #ffc107;
    stroke-width: 5;
    box-sizing: border-box;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
</style>