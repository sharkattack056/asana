import React from "react";

export default class SvgUtil {
  static renderHome() {
    return (
      <svg id="home" viewBox="0 0 512 512">
      <g>
        <g>
          <path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064    c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57    c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z" fill="#9CA6AF"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52    s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053    c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89    c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024    c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847    C455.549,238.499,449.593,232.543,442.246,232.543z" fill="#9CA6AF"/>
        </g>
      </g>
      </svg>
    );
  }

  static renderCheck() {
    return (
      <svg id="check" viewBox="0 0 512 512">
      <g>
      	<g>
      		<path d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.331,26.629,74.98,74.98C26.628,123.332,0,187.62,0,256    s26.628,132.667,74.98,181.019C123.332,485.371,187.619,512,256,512c68.38,0,132.667-26.629,181.019-74.981    C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30    s226,101.383,226,226S380.617,482,256,482z" fill="#9CA6AF"/>
      	</g>
      </g>
      <g>
      	<g>
      		<path d="M378.305,173.859c-5.857-5.856-15.355-5.856-21.212,0.001L224.634,306.319l-69.727-69.727    c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213l80.333,80.333c2.929,2.929,6.768,4.393,10.606,4.393    c3.838,0,7.678-1.465,10.606-4.393l143.066-143.066C384.163,189.215,384.163,179.717,378.305,173.859z" fill="#9CA6AF"/>
      	</g>
      </g>
      </svg>
    );
  }

  static renderStar() {
    return (
      <svg id="star" viewBox="0 0 49.94 49.94">
      <path d="M48.856,22.731c0.983-0.958,1.33-2.364,0.906-3.671c-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757
        c-0.515-0.075-0.96-0.398-1.19-0.865L28.182,3.043c-0.607-1.231-1.839-1.996-3.212-1.996c-1.372,0-2.604,0.765-3.211,1.996
        L16.352,14c-0.23,0.467-0.676,0.79-1.191,0.865L3.069,16.623C1.71,16.82,0.603,17.753,0.178,19.06
        c-0.424,1.307-0.077,2.713,0.906,3.671l8.749,8.528c0.373,0.364,0.544,0.888,0.456,1.4L8.224,44.702
        c-0.232,1.353,0.313,2.694,1.424,3.502c1.11,0.809,2.555,0.914,3.772,0.273l10.814-5.686c0.461-0.242,1.011-0.242,1.472,0
        l10.815,5.686c0.528,0.278,1.1,0.415,1.669,0.415c0.739,0,1.475-0.231,2.103-0.688c1.111-0.808,1.656-2.149,1.424-3.502
        L39.651,32.66c-0.088-0.513,0.083-1.036,0.456-1.4L48.856,22.731z M37.681,32.998l2.065,12.042c0.104,0.606-0.131,1.185-0.629,1.547
        c-0.499,0.361-1.12,0.405-1.665,0.121l-10.815-5.687c-0.521-0.273-1.095-0.411-1.667-0.411s-1.145,0.138-1.667,0.412l-10.813,5.686
        c-0.547,0.284-1.168,0.24-1.666-0.121c-0.498-0.362-0.732-0.94-0.629-1.547l2.065-12.042c0.199-1.162-0.186-2.348-1.03-3.17
        L2.48,21.299c-0.441-0.43-0.591-1.036-0.4-1.621c0.19-0.586,0.667-0.988,1.276-1.077l12.091-1.757
        c1.167-0.169,2.176-0.901,2.697-1.959l5.407-10.957c0.272-0.552,0.803-0.881,1.418-0.881c0.616,0,1.146,0.329,1.419,0.881
        l5.407,10.957c0.521,1.058,1.529,1.79,2.696,1.959l12.092,1.757c0.609,0.089,1.086,0.491,1.276,1.077
        c0.19,0.585,0.041,1.191-0.4,1.621l-8.749,8.528C37.866,30.65,37.481,31.835,37.681,32.998z"/>
      </svg>
    );
  }

  static renderCaret(isRotated) {
    const className = isRotated ? "point-up" : "point-down";

    return (
      <svg id="caret" className={ className } viewBox="0 0 307.054 307.054">
      <g>
        <g id="_x34_85._Up">
          <g>
            <path d="M302.445,205.788L164.63,67.959c-6.136-6.13-16.074-6.13-22.203,0L4.597,205.788c-6.129,6.132-6.129,16.069,0,22.201
              l11.101,11.101c6.129,6.136,16.076,6.136,22.209,0l115.62-115.626L269.151,239.09c6.128,6.136,16.07,6.136,22.201,0
              l11.101-11.101C308.589,221.85,308.589,211.92,302.445,205.788z"/>
          </g>
        </g>
      </g>
    </svg>
    );
  }

  static renderMenuButton(className, toggleCallback) {
    return (
      <svg id="menu-button" className={ className } viewBox="0 0 612 612" onClick={ toggleCallback }>
      <g>
        <g id="Rectangle_1_copy_2">
          <g>
            <path d="M0,97.92v24.48h612V97.92H0z M0,318.24h612v-24.48H0V318.24z M0,514.08h612V489.6H0V514.08z"/>
          </g>
        </g>
      </g>
      </svg>
    );
  }

  static renderList(id = "list") {
    return (
      <svg id={ id } className="project-form-icon" viewBox="0 0 60 60">
      <g>
        <path d="M23.429,17H47c0.552,0,1-0.447,1-1s-0.448-1-1-1H23.429c-0.552,0-1,0.447-1,1S22.877,17,23.429,17z"/>
        <path d="M23.429,32H47c0.552,0,1-0.447,1-1s-0.448-1-1-1H23.429c-0.552,0-1,0.447-1,1S22.877,32,23.429,32z"/>
        <path d="M23.429,47H47c0.552,0,1-0.447,1-1s-0.448-1-1-1H23.429c-0.552,0-1,0.447-1,1S22.877,47,23.429,47z"/>
        <path d="M59,0H1C0.448,0,0,0.447,0,1v58c0,0.553,0.448,1,1,1h58c0.552,0,1-0.447,1-1V1C60,0.447,59.552,0,59,0z M58,58H2V2h56V58z"
          />
        <polygon points="12.501,18.474 14.929,17.197 17.357,18.474 16.894,15.77 18.858,13.854 16.143,13.46 14.929,11 13.715,13.46
          11,13.854 12.965,15.77 	"/>
        <polygon points="12.501,33.557 14.929,32.28 17.357,33.557 16.894,30.853 18.858,28.938 16.143,28.543 14.929,26.083
          13.715,28.543 11,28.938 12.965,30.853 	"/>
        <polygon points="12.501,49 14.929,47.723 17.357,49 16.894,46.296 18.858,44.381 16.143,43.986 14.929,41.526 13.715,43.986
          11,44.381 12.965,46.296 	"/>
      </g>
      </svg>
    );
  }

  static renderBoard(id = "board") {
    return (
      <svg id={ id } className="project-form-icon" viewBox="0 0 490 490">
      <g>
        <g>
          <path d="M117,220H9.9c-5.5,0-9.9,4.4-9.9,9.9v248c0,5.5,4.4,9.9,9.9,9.9H117c5.5,0,9.9-4.4,9.9-9.9v-248
            C126.9,224.4,122.5,220,117,220z M107.1,468H19.8V239.8h87.4V468H107.1z"/>
          <path d="M298.6,2.2H191.4c-5.5,0-9.9,4.4-9.9,9.9v465.7c0,5.5,4.4,9.9,9.9,9.9h107.2c5.5,0,9.9-4.4,9.9-9.9
            V12.1C308.5,6.7,304.1,2.2,298.6,2.2z M288.7,468h-87.4V22h87.4V468z"/>
          <path d="M480.1,487.8c5.5,0,9.9-4.4,9.9-9.9V162.6c0-5.5-4.4-9.9-9.9-9.9H373c-5.5,0-9.9,4.4-9.9,9.9v315.2
            c0,5.5,4.4,9.9,9.9,9.9h107.1V487.8z M382.9,172.5h87.4V468h-87.4V172.5z"/>
        </g>
      </g>
      </svg>
    );
  }
}
