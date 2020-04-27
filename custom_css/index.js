export default function(kibana) {
  return new kibana.Plugin({
    id: 'custom_css',
    require: ['elasticsearch'],
    uiExports: {
      hacks: ['plugins/custom_css/hacks/hack'],
    },
  });
}
