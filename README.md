Step - component for Vue.js
===========================

The component is intended for serial output of information. For example, you can
consistently display a questionnaire or a psychological test.

Other components act as blocks.

Such a component must have the `displayed` property, which controls whether or
not to display this component on the screen. If this property is absent, then it
(the component without \`displayed\`) does not participate in the switch. It is
displayed as usual. May use methods of the Step component.

The condition for the further transition must be defined in the component and
the method provided by the Step component must be called. The condition for the
transition may be a correctly completed form or the selected option from the
list.

\--------------------------------------------------------

Компонент предназначен для последовательного вывода информации. Например, можно
последовательно выводить анкету или психологический тест.

В качестве блоков выступают другие компоненты.

Такой компонент должен иметь свойство `displayed`, которое управляет отображать
или нет этот компонент на экране. Если это свойство отсутствует, то он
(компонент без `displayed`) не учавствует в переключении. Выводится как обычно.
Может использовать методы компонента Step.

В компоненте должно быть определено условие для дальнейшего перехода и вызван
метод, предоставленный компонентом Step. Условием перехода может являться
правильно заполненная форма или выбранный вариант из списка.

 

Install via NPM
---------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm i --save-dev @quanzo/vue-step
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Load from CDN
-------------

You can load specific version of package from [jsDelivr
CDN](https://cdn.jsdelivr.net/npm/@quanzo/personality@2.0.0).

`<script src="https://cdn.jsdelivr.net/npm/@quanzo/vue-step"></script>`

 

Methods provided by the component Step
--------------------------------------

| provide                                  | component method                     | return  |                                                       |
|------------------------------------------|--------------------------------------|---------|-------------------------------------------------------|
| nextStep()                               | next()                               |         | forward one step                                      |
| prevStep()                               | prev()                               |         | one step back                                         |
| toStep(index)                            | to(index)                            |         | go to slide by number                                 |
| toStepAttr(atributeName, attributeValue) | toAttr(atributeName, attributeValue) |         |                                                       |
| countSteps()                             | count()                              | integer | total number of elements                              |
| possiblePrevStep()                       | possiblePrev()                       | boolean | is it possible to step back                           |
| possibleNextStep()                       | possibleNext()                       | boolean | is it possible to step forward                        |
| stopAutoStep()                           | stop()                               |         | stop auto switch                                      |
| currentStep()                            |                                      | integer | current step number                                   |
| registerEventListener(eventName, func)   |                                      |         | Registers a function on an event. function(params={}) |

Events
------

| event         | \$emit | event params                                     |                                                          |
|---------------|--------|--------------------------------------------------|----------------------------------------------------------|
| event-step-to | yes    | {to: ..., from: ..., count: ..., component: ...} | The event will be triggered after going to another step. |

Options
-------

| param      | type                    | default | description                               |
|------------|-------------------------|---------|-------------------------------------------|
| auto-start | boolean                 | false   | start auto switch                         |
| timeout    | integer                 | 15000   | automatic switching time, in milliseconds |
| round      | boolean                 | true    | switch slides in a circle                 |
| inc        | integer                 | 1       | step increment                            |
| indexStart | integer                 | 0       | display starts from this index            |
| beforeTo   | function(to, from, obj) | true    |                                           |
| afterTo    | function(to, from, obj) |         |                                           |

How to use
----------

Connect script

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<script src="../dist/bundle.js"></script>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Register Vue.js component

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Vue.component("step", VueStep.Step());
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create with tag (example)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<div id="choose">
    <step :auto-start="false" :round="false" name="stepbystep">
        <choose-tarif :tarifs="tarifs"></choose-tarif>
        <choose-option :tarifs="tarifs"></choose-option>
        <result-choise :tarifs="tarifs"></result-choise>
    </step>
</div>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Additional
----------

Additional components available

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Vue.component("block", VueStep.Test("test-block-2"));
Vue.component("bimg", VueStep.Image());
Vue.component("block-content", VueStep.Content());
Vue.component("block-load-content", VueStep.LoadContent());
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### VueStep.Image

Image output

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<bimg classes="content content-image" styles="display:block" src="https://data.1freewallpapers.com/thumb/i-m-hungry.jpg" url="http://ya.ru"></bimg>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

| params     | default                | type     | description                                        |
|------------|------------------------|----------|----------------------------------------------------|
| src        |                        | string   |                                                    |
| url        | “”                     | string   | If present, the picture will be wrapped in a link. |
| title      | “”                     | string   | attribute image                                    |
| alt        | “”                     | string   | attribute image                                    |
| transition | fade                   | string   |                                                    |
| styles     | “”                     | string   | css styles                                         |
| classes    | content                | string   | css classes                                        |
| onShow     | function(component) {} | function | Will be called when this block is shown.           |
| onHide     | function(component) {} | function | Will be called when this block is hidden.          |

 

### VueStep.Content

Display specified content

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<block-content style="background-color:black;color:antiquewhite" classes="content">
    <h2>Content from block</h2>
</block-content>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| params     | default                | type     | description                               |
|------------|------------------------|----------|-------------------------------------------|
| onShow     | function(component) {} | function | Will be called when this block is shown.  |
| onHide     | function(component) {} | function | Will be called when this block is hidden. |
| transition | fade                   | string   |                                           |
| styles     | “”                     | string   | css styles                                |
| classes    | content                | string   | css classes                               |

Use all provided step-component methods in content

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<block-content style="background-color:black;color:antiquewhite">
    <template v-slot="{ nextStep }">
        <h2>This content</h2>
        <button @click="nextStep()">Next</button>
    </template>
</block-content>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

or

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<block-content style="background-color:black;color:antiquewhite">
    <template v-slot="params">
        <button @click="params.nextStep()">Next</button>
    </template>
</block-content>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### VueStep.LoadContent

Download content from a source and display it. Content is only loaded when
displayed.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<block-load-content url="content.html" reqmethod="GET"></block-load-content>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| param          | default                                         | type     | description                                                                                     |
|----------------|-------------------------------------------------|----------|-------------------------------------------------------------------------------------------------|
| url            |                                                 | string   |                                                                                                 |
| reqmethod      | GET                                             | string   | method of request                                                                               |
| reqparams      | {}                                              | object   | additional params of request                                                                    |
| beforeRequest  | function(component, reqParams) { return true; } | function | It will be called before an ajax request. If it returns false, the request will not take place. |
| successRequest | function(component) {}                          | function | Will be called after a successful ajax request.                                                 |
| onShow         | function(component) {}                          | function | Will be called when this block is shown.                                                        |
| onHide         | function(component) {}                          | function | Will be called when this block is hidden.                                                       |
| transition     | fade                                            | string   |                                                                                                 |
| styles         | “”                                              | string   | css styles                                                                                      |
| classes        | content                                         | string   | css classes                                                                                     |
