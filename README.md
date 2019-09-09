Step - component for Vue.js
===========================

The component is intended for serial output of information. For example, you can
consistently display a questionnaire or a psychological test.

Other components act as blocks.

Such a component must have the `displayed` property, which controls whether or
not to display this component on the screen.

The condition for the further transition must be defined in the component and
the method provided by the Step component must be called. The condition for the
transition may be a correctly completed form or the selected option from the
list.

\--------------------------------------------------------

Компонент предназначен для последовательного вывода информации. Например, можно
последовательно выводить анкету или психологический тест.

В качестве блоков выступают другие компоненты.

Такой компонент должен иметь свойство `displayed`, которое управляет отображать
или нет этот компонент на экране.

В компоненте должно быть определено условие для дальнейшего перехода и вызван
метод, предоставленный компонентом Step. Условием перехода может являться
правильно заполненная форма или выбранный вариант из списка.

Methods provided by the component Step
--------------------------------------

| provide                                  | component method                     | return  |                                |
|------------------------------------------|--------------------------------------|---------|--------------------------------|
| nextStep()                               | next()                               |         | forward one step               |
| prevStep()                               | prev()                               |         | one step back                  |
| toStep(index)                            | to(index)                            |         | go to slide by number          |
| toStepAttr(atributeName, attributeValue) | toAttr(atributeName, attributeValue) |         |                                |
| countSteps()                             | count()                              | integer | total number of elements       |
| possiblePrevStep()                       | possiblePrev()                       | boolean | is it possible to step back    |
| possibleNextStep()                       | possibleNext()                       | boolean | is it possible to step forward |
| stopAutoStep()                           | stop()                               |         | stop auto switch               |

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

 

### VueStep.Content

Display specified content

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<block-content style="background-color:black;color:antiquewhite" classes="content">
    <h2>Content from block</h2>
</block-content>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

### VueStep.LoadContent

Download content from a source and display it. Content is only loaded when
displayed.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<block-load-content url="content.html"></block-load-content>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
