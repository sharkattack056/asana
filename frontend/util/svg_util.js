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

  static renderCheck(id = "check", toggleCallback) {
    return (
      <svg id={ id } viewBox="0 0 512 512" onClick={ toggleCallback }>
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

  static renderUser(id = "user") {
    return (
      <svg id={ id } className="project-form-icon" viewBox="0 0 60 60">
      <path d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951
        c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319
        c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056
        v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309
        c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043
        C53,47.519,51.089,44.427,48.014,42.889z M51,54c0,1.357-7.412,4-21,4S9,55.357,9,54v-3.238c0-2.571,1.402-4.934,3.659-6.164
        l8.921-4.866C23.073,38.917,24,37.354,24,35.655v-4.019l-0.233-0.278c-0.024-0.029-2.475-2.994-3.41-7.065l-0.091-0.396l-0.341-0.22
        C19.346,23.303,19,22.676,19,22v-4c0-0.561,0.238-1.084,0.67-1.475L20,16.228V10l-0.009-0.131c-0.003-0.027-0.343-2.799,1.605-5.021
        C23.253,2.958,26.081,2,30,2c3.905,0,6.727,0.951,8.386,2.828c1.947,2.201,1.625,5.017,1.623,5.041L40,16.228l0.33,0.298
        C40.762,16.916,41,17.439,41,18v4c0,0.873-0.572,1.637-1.422,1.899l-0.498,0.153l-0.16,0.495c-0.669,2.081-1.622,4.003-2.834,5.713
        c-0.297,0.421-0.586,0.794-0.837,1.079L35,31.623v4.125c0,1.77,0.983,3.361,2.566,4.153l9.553,4.776
        C49.513,45.874,51,48.28,51,50.957V54z"/>
      </svg>
    );
  }

  static renderUsers(id = "users", className = "project-form-icon") {
    return (
      <svg id={ id } className={ className } viewBox="0 0 60 60">
      <path d="M55.014,45.389l-9.553-4.776C44.56,40.162,44,39.256,44,38.248v-3.381c0.229-0.28,0.47-0.599,0.719-0.951
        c1.239-1.75,2.232-3.698,2.954-5.799C49.084,27.47,50,26.075,50,24.5v-4c0-0.963-0.36-1.896-1-2.625v-5.319
        c0.056-0.55,0.276-3.824-2.092-6.525C44.854,3.688,41.521,2.5,37,2.5s-7.854,1.188-9.908,3.53c-1.435,1.637-1.918,3.481-2.064,4.805
        C23.314,9.949,21.294,9.5,19,9.5c-10.389,0-10.994,8.855-11,9v4.579c-0.648,0.706-1,1.521-1,2.33v3.454
        c0,1.079,0.483,2.085,1.311,2.765c0.825,3.11,2.854,5.46,3.644,6.285v2.743c0,0.787-0.428,1.509-1.171,1.915l-6.653,4.173
        C1.583,48.134,0,50.801,0,53.703V57.5h14h2h44v-4.043C60,50.019,58.089,46.927,55.014,45.389z M14,53.262V55.5H2v-1.797
        c0-2.17,1.184-4.164,3.141-5.233l6.652-4.173c1.333-0.727,2.161-2.121,2.161-3.641v-3.591l-0.318-0.297
        c-0.026-0.024-2.683-2.534-3.468-5.955l-0.091-0.396l-0.342-0.22C9.275,29.899,9,29.4,9,28.863v-3.454
        c0-0.36,0.245-0.788,0.671-1.174L10,23.938l-0.002-5.38C10.016,18.271,10.537,11.5,19,11.5c2.393,0,4.408,0.553,6,1.644v4.731
        c-0.64,0.729-1,1.662-1,2.625v4c0,0.304,0.035,0.603,0.101,0.893c0.027,0.116,0.081,0.222,0.118,0.334
        c0.055,0.168,0.099,0.341,0.176,0.5c0.001,0.002,0.002,0.003,0.003,0.005c0.256,0.528,0.629,1,1.099,1.377
        c0.005,0.019,0.011,0.036,0.016,0.054c0.06,0.229,0.123,0.457,0.191,0.68l0.081,0.261c0.014,0.046,0.031,0.093,0.046,0.139
        c0.035,0.108,0.069,0.215,0.105,0.321c0.06,0.175,0.123,0.356,0.196,0.553c0.031,0.082,0.065,0.156,0.097,0.237
        c0.082,0.209,0.164,0.411,0.25,0.611c0.021,0.048,0.039,0.1,0.06,0.147l0.056,0.126c0.026,0.058,0.053,0.11,0.079,0.167
        c0.098,0.214,0.194,0.421,0.294,0.621c0.016,0.032,0.031,0.067,0.047,0.099c0.063,0.125,0.126,0.243,0.189,0.363
        c0.108,0.206,0.214,0.4,0.32,0.588c0.052,0.092,0.103,0.182,0.154,0.269c0.144,0.246,0.281,0.472,0.414,0.682
        c0.029,0.045,0.057,0.092,0.085,0.135c0.242,0.375,0.452,0.679,0.626,0.916c0.046,0.063,0.086,0.117,0.125,0.17
        c0.022,0.029,0.052,0.071,0.071,0.097v3.309c0,0.968-0.528,1.856-1.377,2.32l-2.646,1.443l-0.461-0.041l-0.188,0.395l-5.626,3.069
        C15.801,46.924,14,49.958,14,53.262z M58,55.5H16v-2.238c0-2.571,1.402-4.934,3.659-6.164l8.921-4.866
        C30.073,41.417,31,39.854,31,38.155v-4.018v-0.001l-0.194-0.232l-0.038-0.045c-0.002-0.003-0.064-0.078-0.165-0.21
        c-0.006-0.008-0.012-0.016-0.019-0.024c-0.053-0.069-0.115-0.152-0.186-0.251c-0.001-0.002-0.002-0.003-0.003-0.005
        c-0.149-0.207-0.336-0.476-0.544-0.8c-0.005-0.007-0.009-0.015-0.014-0.022c-0.098-0.153-0.202-0.32-0.308-0.497
        c-0.008-0.013-0.016-0.026-0.024-0.04c-0.226-0.379-0.466-0.808-0.705-1.283c0,0-0.001-0.001-0.001-0.002
        c-0.127-0.255-0.254-0.523-0.378-0.802l0,0c-0.017-0.039-0.035-0.077-0.052-0.116h0c-0.055-0.125-0.11-0.256-0.166-0.391
        c-0.02-0.049-0.04-0.1-0.06-0.15c-0.052-0.131-0.105-0.263-0.161-0.414c-0.102-0.272-0.198-0.556-0.29-0.849l-0.055-0.178
        c-0.006-0.02-0.013-0.04-0.019-0.061c-0.094-0.316-0.184-0.639-0.26-0.971l-0.091-0.396l-0.341-0.22
        C26.346,25.803,26,25.176,26,24.5v-4c0-0.561,0.238-1.084,0.67-1.475L27,18.728V12.5v-0.354l-0.027-0.021
        c-0.034-0.722,0.009-2.935,1.623-4.776C30.253,5.458,33.081,4.5,37,4.5c3.905,0,6.727,0.951,8.386,2.828
        c1.947,2.201,1.625,5.017,1.623,5.041L47,18.728l0.33,0.298C47.762,19.416,48,19.939,48,20.5v4c0,0.873-0.572,1.637-1.422,1.899
        l-0.498,0.153l-0.16,0.495c-0.669,2.081-1.622,4.003-2.834,5.713c-0.297,0.421-0.586,0.794-0.837,1.079L42,34.123v4.125
        c0,1.77,0.983,3.361,2.566,4.153l9.553,4.776C56.513,48.374,58,50.78,58,53.457V55.5z"/>
      </svg>
    );
  }

  static renderEllipsis(id = "ellipsis", toggleCallback) {
    return (
      <svg id={ id } onClick={ toggleCallback } viewBox="0 0 408 408">
        <path d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51
      	   s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
      	    S232.05,153,204,153z"/>
      </svg>
    );
  }

  static renderParagraph(id = "paragraph") {
    return (
      <svg id={ id } viewBox="0 0 512 512">
      <g>
      	<g>
      		<g>
      			<path d="M10.667,213.333h320c5.896,0,10.667-4.771,10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667h-320
      				C4.771,170.667,0,175.438,0,181.333v21.333C0,208.563,4.771,213.333,10.667,213.333z"/>
      			<path d="M501.333,298.667H10.667C4.771,298.667,0,303.438,0,309.333v21.333c0,5.896,4.771,10.667,10.667,10.667h490.667
      				c5.896,0,10.667-4.771,10.667-10.667v-21.333C512,303.438,507.229,298.667,501.333,298.667z"/>
      			<path d="M330.667,426.667h-320C4.771,426.667,0,431.438,0,437.333v21.333c0,5.896,4.771,10.667,10.667,10.667h320
      				c5.896,0,10.667-4.771,10.667-10.667v-21.333C341.333,431.438,336.563,426.667,330.667,426.667z"/>
      			<path d="M501.333,42.667H10.667C4.771,42.667,0,47.438,0,53.333v21.333c0,5.896,4.771,10.667,10.667,10.667h490.667
      				c5.896,0,10.667-4.771,10.667-10.667V53.333C512,47.438,507.229,42.667,501.333,42.667z"/>
      		</g>
      	</g>
      </g>
      </svg>
    );
  }

  static renderCalendar(id = "calendar") {
    return (
      <svg id={ id } viewBox="0 0 32 32">
      <g>
      	<g id="calendar_1_">
      		<path d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1
      			c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667
      			C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667
      			C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1
      			s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z"/>
      		<rect x="7" y="12" width="4" height="3"/>
      		<rect x="7" y="17" width="4" height="3"/>
      		<rect x="7" y="22" width="4" height="3"/>
      		<rect x="14" y="22" width="4" height="3"/>
      		<rect x="14" y="17" width="4" height="3"/>
      		<rect x="14" y="12" width="4" height="3"/>
      		<rect x="21" y="22" width="4" height="3"/>
      		<rect x="21" y="17" width="4" height="3"/>
      		<rect x="21" y="12" width="4" height="3"/>
      	</g>
      </g>
      </svg>
    );
  }

  static renderCheckMark(id = "check-mark") {
    return (
      <svg id={ id } viewBox="0 0 512 512">
      <g>
      	<g>
      		<path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
      			c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
      			C514.5,101.703,514.499,85.494,504.502,75.496z"/>
      	</g>
      </g>
      </svg>
    );
  }

  static renderSubtask(id = "subtask") {
    return (
      <svg id={ id } viewBox="0 0 32 32">
        <path d="M25,20c-2.4,0-4.4,1.7-4.9,4H11c-3.9,0-7-3.1-7-7v-5h16.1c0.5,2.3,2.5,4,4.9,4c2.8,0,5-2.2,5-5s-2.2-5-5-5c-2.4,0-4.4,1.7-4.9,4H4V3c0-0.6-0.4-1-1-1S2,2.4,2,3v14c0,5,4,9,9,9h9.1c0.5,2.3,2.5,4,4.9,4c2.8,0,5-2.2,5-5S27.8,20,25,20z M25,8c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S23.3,8,25,8z M25,28c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S26.7,28,25,28z">
        </path>
      </svg>
    );
  }

  static renderLike(id = "like") {
    return (
      <svg id={ id } viewBox="0 0 478.2 478.2">
        <g>
        	<path d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
        		c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
        		c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
        		c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
        		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
        		c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
        		c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
        		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4
        		c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
        		c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
        		c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
        		c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
        		c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
        		c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
        		C444.875,295.3,440.675,304.4,431.975,313.4z"/>
        </g>
      </svg>
    );
  }

  static renderDragable(id = "dragable") {
    return (
      <svg id={ id } viewBox="0 0 32 32">
        <path d="M14,5.5c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S14,3.8,14,5.5z M21,8.5c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S19.3,8.5,21,8.5z M11,12.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,12.5,11,12.5z M21,12.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,12.5,21,12.5z M11,22.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,22.5,11,22.5z M21,22.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,22.5,21,22.5z">
        </path>
      </svg>
    );
  }
}
