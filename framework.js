const {mathjax} = require('mathjax-full/js/mathjax.js');
const {TeX} = require('mathjax-full/js/input/tex.js');
const {SVG} = require('mathjax-full/js/output/svg.js');
const {liteAdaptor} = require('mathjax-full/js/adaptors/liteAdaptor.js');
const {RegisterHTMLHandler} = require('mathjax-full/js/handlers/html.js');
const {AssistiveMmlHandler} = require('mathjax-full/js/a11y/assistive-mml.js');

const {AllPackages} = require('mathjax-full/js/input/tex/AllPackages.js');

const adaptor = liteAdaptor();
const handler = RegisterHTMLHandler(adaptor);

const tex = new TeX({
    packages: ['base', 'autoload', 'require', 'ams', 'newcommand'],
    inlineMath: [ ["$","$"] ]
});
const svg = new SVG({fontCache: 'none'});

function renderPug(block) {
    var recv; with({pug_html: ""}){
        eval(`(${block})();`); recv = pug_html;
    }; return recv
}

function renderTeX(formulae) {
    return adaptor.innerHTML(mathjax.document(formulae, {
        InputJax: tex, OutputJax: svg
    }).render().document.body);
}

exports.tex = function (block) {
    return renderTeX(renderPug(block));
}

exports.highlight = function (block) {
    return renderPug(block)
        .replace(/([(){}→=]+|:|:=)/g,
            '<span class="h__symbol">$1</span>')
        .replace(/\b(data|transp|∀|Π|Σ|λ|glue|unglue|Glue|Anders|prover|MLTT|PTS|CCHM|HTS|deRham|hcomp|where|def|mutual|begin|end|module|import|option|false|true|indᵂ|sup|.1|.2|Σ|Π|Pi|Sigma|W|𝟎|𝟏|𝟐|ind₂|ind₁|ind₀|★|0₂|1₂|Path|PathP|Type|Prop|inductive|record|forall|fun|match|let|axiom|theorem|lemma|in|U|S|V)\b(?!:)/g,
            '<span class="h__keyword">$1</span>');
}