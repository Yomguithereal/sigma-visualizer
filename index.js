import Graph from 'graphology';
import gexf from 'graphology-gexf/browser';
import WebGLRenderer from 'sigma/renderers/webgl';

const GEXF_FILE = './file.gexf';

const container = document.getElementById('graph');

fetch(GEXF_FILE)
  .then(response => response.text())
  .then(body => {

    const graph = gexf.parse(Graph, body);

    const renderer = new WebGLRenderer(graph, container);
  });
