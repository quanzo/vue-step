<?php
/*$data = @file_get_contents('https://www.sknt.ru/job/frontend/data.json', false, stream_context_create([
'method' => 'GET',
'timeout' => 3,
'ignore_errors' => false,
'max_redirects' => '0'
]));*/
$data = file_get_contents(__DIR__ . '/data.json');
if ($data) {
    $arTarifs = json_decode($data, true);
    if (!empty($arTarifs['result']) && $arTarifs['result'] == 'ok') {
        
        foreach ($arTarifs['tarifs'] as &$tarif) {
            $max = false;
            $min = false;

            usort($tarif['tarifs'], function ($a, $b) {
                if ($a['price'] == $b['price']) {
                    return 0;
                }
                return $a['price'] > $b['price'] ? 1 : -1;
            });

            
            foreach ($tarif['tarifs'] as &$tarifOpt) {
                $monthPrice = $tarifOpt['price'] / $tarifOpt['pay_period'];

                if ($max === false || $monthPrice > $max) {
                    $max = $monthPrice;
                }
                if ($min === false || $monthPrice < $min) {
                    $min = $monthPrice;
                }
                $tarifOpt['new_payday_text'] = (DateTime::createFromFormat('UO', $tarifOpt['new_payday']))->format('d.m.Y');
            }
            $tarif['price_min'] = $min;
            $tarif['price_max'] = $max;

            foreach ($tarif['tarifs'] as &$tarifOpt) {
                $tarifOpt['discount'] = $max * $tarifOpt['pay_period'] - $tarifOpt['price'];
            }            
        }
        usort($arTarifs['tarifs'], function ($a, $b) {
            if ($a['price_min'] == $b['price_min']) {
                return 0;
            }
            return $a['price_min'] > $b['price_min'] ? 1 : -1;
        });

        /*echo '<pre>';
        print_r($arTarifs['tarifs']);
        echo '</pre>';*/

        file_put_contents(__DIR__.'/tarifs.json', json_encode($arTarifs['tarifs']));

    }
} else {
    echo ' Unavailable';
}?><html>

<head>
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="../dist/bundle.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 2s
        }

        .fade-enter,
        .fade-leave-to
        /* .fade-leave-active в версии ниже 2.1.8 */
        {
            opacity: 0
        }
        #stepper{
            width: 30rem;
            height: 20rem;
            margin: 2em auto;
            padding:0;
        }
        #stepper .content{
            width: 30rem;
            height: 20rem;
            position:absolute;
            padding: 0.5em;
        }
        #stepper .content-image img{
            width: auto;
            height: 100%;
        }
/***/
        body{
            background-color:#EFEFF4;
            font-family: 'Roboto', sans-serif;
        }
        #choose{
            
        }
        #choose button{
            
        }
        .block{
            background-color:#fff;
            border: none;
            border-top: 1px solid #C8C7CC;
            border-bottom: 1px solid #C8C7CC;
            padding: 0;
            margin: 2rem 0;
            text-align: left;
            color: #4D575D;

        }
        .block .name,
        .block .info > *,        
        .text-line{
            margin-left: 1rem;
            margin-bottom: 0.5rem;
            padding-right: 1rem;
        }
        .block .grouped{
            margin-bottom: 0.5rem;
        }
        .block .grouped.gray{
            color: #aaa;
        }
        .block .grouped > *{
            margin-left: 1rem;
            margin-bottom:0;
            padding-right: 2rem;
        }
        .block .info{
            position: relative;
            padding-right: 2em;
        }
        
        .block .info:before{
            content: "›";
            color: #C8C7CC;
            font-size: 2em;
            padding: 0.3em;
            line-height: 0.5em;
            position:absolute;
            right:0;
            height: 10%;
            bottom: 40%;
        }
        .block .speed{
            margin: 0.5em 0;
        }
        .block .name{
            color: #82C12B;
            margin-top: 0;
            margin-bottom: 0.5rem;
            margin-right: 0;
            text-align: left;
            font-size: 1.5em;
            line-height: 2em;
            border-bottom: 1px solid #C8C7CC;
        }
        .block a{
            color: #007AFF;
            text-decoration: none;
            display: block;
            border-top: 1px solid #C8C7CC;
            padding: 0.5rem 0.5rem 0.5rem 0;
            margin: 0.5rem 0 0 1rem;
        }
        
        .block .speed:after{
            clear: both;
            content: ' ';
            display: block;
            font-size: 0;
            line-height: 0;
            visibility: hidden;
            width: 0;
            height: 0;
        }
        .block .speed span{
            float: left;            
            color: #fff;
            padding: 0.5em 1rem;
        }
        .block.earth .speed span{
            background-color:#70603E;
        }
        .block.fire .speed span{
            background-color:#E74807
;
        }
        .block.water .speed span{
            background-color:#0075D9;
        }
        .info{
            margin-bottom: 0.5rem;
        }
        .info ul{
            padding:0;
            margin:0;
            padding-bottom: 0.5rem;            
        }
        .info ul li{
            list-style: none;
            line-height: 1.3em;
        }
        
        .info .price, .info .price-per-month{
            font-size: 1.1em;
            font-weight: 500;
            font-style: normal;
        }
        
        .info .full-price{
            margin-bottom:0;
        }
        button.back{            
            display: block;
            background-color:#fff;
            border: none;
            border-top: 1px solid #C8C7CC;
            border-bottom: 1px solid #C8C7CC;
            padding: 0;
            margin: 2rem 0;
            color: #4D575D;
            font-family: 'Roboto', sans-serif;
            position:relative;
            width: 100%;
            text-align: center;
            font-size:1.5em;
            line-height: 3em;
        }
        button.back:before{
            content: "‹";
            font-weight: bold;
            color: #82C12B;
            font-size: 3rem;
            padding: 0 0.5em;
            float:left;
        }
        .choose-button{
            display: block;
            margin: 0.5rem 1rem;
            background-color: #82C12B;
            border: none;
            padding: 1rem 2rem;
            color: #fff;
            text-align:center;
        }
        @media screen and (max-width: 639px) {}
        @media screen and (min-width: 640px) and (max-width: 1023px) {
            .variants{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: auto;
            }
            .variants > div{
                margin: 0.5em;
            }
        }
        @media screen and (min-width: 1024px) {
            .variants{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: auto;
            }
            .variants > div{
                margin: 0.5em;
            }
        }

        
    </style>
    
</head>

<body>

        
<div id="choose">
	<step :auto-start="false" name="stepbystep">
        <choose-tarif :tarifs="tarifs"></choose-tarif>
        <choose-option :tarifs="tarifs"></choose-option>
        <result-choise :tarifs="tarifs"></result-choise>
	</step>
</div>

<script>
	Vue.component("step", VueStep.Step());
    State = {
        tarif: false,
        option: false,
        month: function (size) {
                var m = " месяцев";
                if (size==1) {
                    m = " месяц";
                }
                if (size>1 && size<=4) {
                    m = " месяца";
                }
                return size+m;
            }
    };
    /******/
    Vue.component("choose-tarif", {
        inject: ["nextStep"],
        props: ["tarifs"],
        data() {
            return {
                state: State,
                displayed: false
            };
        },
        methods: {
            chooseTarif(id) {                
                if (id >= 0 && id < this.tarifs.length) {
                    this.state.tarif = id;
                    //console.log(id, this.state, this.state.tarif);
                    this.nextStep();
                }                 
            },
            classTarif(id) {
                let type = "earth";
                let name = this.tarifs[id].title.toLowerCase();
                let vars = {
                    water: "вода",
                    fire: "огонь"
                };
                for (var o in vars) {
                    if (name.indexOf(vars[o]) != -1) {
                        type = o;
                        break;
                    }
                }
                return type+" block";
            }
        },
        template: '<div class="choose-tarif" v-if="displayed">\
            <div class="variants">\
            <div :class="classTarif(id)" v-for="(tarif, id) of tarifs" @click="chooseTarif(id)" :key="id" :data-id="id">\
            <div class="text-line name">Тариф "{{tarif.title}}"</div>\
            <div class="info">\
                <div class="speed"><span>{{tarif.speed}} Мбит/с</span></div>\
                <div class="text-line price">{{tarif.price_min}} - {{tarif.price_max}} ₽</div>\
                <ul v-if="tarif.free_options">\
                    <li v-for="fo in tarif.free_options">{{fo}}</li>\
                </ul>\
            </div>\
            <a :href=tarif.link>Узнать подробнее на сайте sknt.ru</a>\
            </div>\
            </div>\
        </div>'
    });
    /******/
    Vue.component("choose-option", {
        inject: ["nextStep", "prevStep"],
        props: ["tarifs"],
        data() {
            return {
                state: State,
                displayed: false
            };
        },
        methods: {
            chooseOption(id) {                
                console.log(this.state.tarif, id);
                if (this.state.tarif !== false && id >= 0 && id < this.tarifs[this.state.tarif].tarifs.length) {
                    this.state.option = id;
                    this.nextStep();
                }                 
            },
            back() {
                this.state.tarif = false;
                this.state.option = false;
                this.prevStep();
            },
            tarifName() {
                console.log(this.tarifs[0].title);
                return this.tarifs[this.state.tarif].title;
            },
            options() {
                return this.tarifs[this.state.tarif].tarifs
            },
            payPerMonth(one_option) {
                return one_option.price/one_option.pay_period
            }
        },
        template: '<div class="choose-option" v-if="displayed">\
        <button @click="back" class="back"> Тариф "{{tarifName()}}" </button>\
        <div class="variants">\
        <div class="block" v-for="(one_option, id) in options()" @click="chooseOption(id)">\
            <div class="text-line name">{{state.month(one_option.pay_period)}}</div>\
            <div class="info">\
                <div class="price-per-month">{{payPerMonth(one_option)}} ₽/мес</div>\
                <div class="full-price">разовый платеж — {{one_option.price}} ₽</div>\
                <div class="discount" v-if="one_option.discount">скидка — {{one_option.discount}} ₽</div>\
            </div>\
        </div>\
        </div>\
        </div>'
    });
    /******/
    Vue.component("result-choise", {
        inject: ["prevStep"],
        props: ["tarifs"],
        data() {
            return {
                state: State,
                displayed: false,
                
            };
        },
        methods: {
            back() {                
                State.option = false;
                this.prevStep();
            },
            currentTarif() {                
                return this.tarifs[this.state.tarif];                
            },
            currentOption() {
                return this.currentTarif["tarifs"][this.state.option];
            },
            pricePerMonth: function () {
                return this.currentOption().price/this.currentOption().pay_period;
            },
            choosedVar() {
                console.log(this.info);
            }
        },
        computed: {
            info() {
                var tarif = this.tarifs[this.state.tarif];
                var option = tarif.tarifs[this.state.option];
                var data = {
                    payPeriod: this.state.month(option.pay_period),
                    tarifName: "Тариф \""+tarif.title+"\"",
                    option: option,
                    tarif: tarif,
                    payPerMonth: option.price/option.pay_period
                };
                //console.log(data);
                return data;
            }
        },
        template: '<div class="result" v-if="displayed">\
            <button @click="back" class="back"> Выбор тарифа </button>\
            <div class="block">\
                <div class="text-line name">{{info.tarifName}}</div>\
                <div class="grouped">\
                    <div class="pay-period">Период оплаты — {{info.payPeriod}}</div>\
                    <div>{{info.payPerMonth}} ₽/мес</div>\
                </div>\
                <div class="grouped">\
                    <div>разовый платеж — {{info.option.price}} ₽</div>\
                    <div>со счета спишется — {{info.option.price}} ₽</div>\
                </div>\
                <div class="grouped gray">\
                    <div>вступит в силу — сегодня</div>\
                    <div>активно до — {{info.option.new_payday_text}}</div>\
                </div>\
                <div class="choose-button" @click="choosedVar">Выбрать</div>\
            </div>\
        </div>'    
    });

    /******/
    var choose = new Vue({
        el: "#choose",
        data: {
            tarifs: <?=json_encode($arTarifs['tarifs'])?>
        },
        methods: {},
        computed: {},
    });
	
</script>
</body>
</html>
