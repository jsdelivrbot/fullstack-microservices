module.exports = component;

function component(args) {
  return {
    html: `
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">Service 1</h3>
        </div>
        <div class="panel-body">
          <div class="list-group">
            <button data-service="Service 1" data-action="Action 1" id="s1a1" type="button" class="list-group-item">Action 1</button>
            <button data-service="Service 1" data-action="Action 2" id="s1a2" type="button" class="list-group-item">Action 2</button>
          </div>
        </div>
      </div>
   `
  }
}