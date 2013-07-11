require.def("sampleapp/appui/widgets/frame",
    [
        "antie/class",
        "antie/widgets/container",
        "antie/widgets/componentcontainer"
    ],
    function(Class, Container, ComponentContainer) {
        return Container.extend({

            init: function (id) {
                this._super(id);
                this._componentContainers = {};
            },

            addComponentContainer: function (componentContainerId) {
                this._componentContainers[componentContainerId] = new ComponentContainer(componentContainerId);
                this.appendChildWidget(this._componentContainers[componentContainerId]);
            },

            showComponent: function (componentContainerId, componentRequirePath) {
                this._componentContainers[componentContainerId].show(componentRequirePath);
            },

            getComponentContainer: function (componentContainerId) {
                return this._componentContainers[componentContainerId];
            },

            getComponent: function(componentContainerId) {
                return this.getComponentContainer(componentContainerId).getContent();
            }

        });
    });