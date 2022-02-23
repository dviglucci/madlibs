import React from "react";
import Link from "react-router-dom/Link";

const Poem1 = () => {
  return (
    <div>
      <h2>The [NOUN 1] Not Taken</h2>
      <h4>By Robert Frost and [INSERT NAME]</h4>
      <p>
          <div>Two [NOUN 1 BUT PLURAL] diverged in a [ADJ] wood,</div>
          <div>And sorry I could not [VERB 0] both</div>
          <div>And be one traveler, [ADJ 2] I stood</div>
          <div>And [VERB, PAST TENSE] down one as far as I could</div>
          <div>To where it [VERB 2, PAST TENSE] in the undergrowth;</div>
      </p>

      <p>
          <div>Then [VERB 3, PAST TENSE] the other, as just as [ADJ 3],</div>
          <div>And having perhaps the better [NOUN 2],</div>
          <div>Because it was [ADJ 4] and wanted wear;</div>
          <div>Though as for that the passing there</div>
          <div>Had [VERB 4, PAST TENSE] them really about the same,</div>
      </p>

      <p>
          <div>And both that [NOUN 3] equally lay</div>
          <div>In leaves no step had trodden [ADJ 5].</div>
          <div>Oh, I kept the [NOUN 4] for another day!</div>
          <div>Yet knowing how [NOUN 5] leads on to [NOUN 5],</div>
          <div>I [VERB 5, PAST TENSE] if I should ever come back.</div>
      </p>

      <p>
          <div>I shall be telling this with a [NOUN 6]</div>
          <div>Somewhere [PLURAL NOUN] and [PLURAL NOUN] hence:</div>
          <div>Two [NOUN 1 BUT PLURAL] diverged in a wood, and I—</div>
          <div>I took the one less [VERB 0, PAST TENSE] by,</div>
          <div>And that has made all the difference.</div>
      </p>
    </div>
  );
};

export default Poem1;
