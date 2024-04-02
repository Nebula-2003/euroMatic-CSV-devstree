const _ = require('lodash');
let a = [
    {
        "firstName": "Syed",
        "lastName": "Oyon",
        "fullName": "Syed Oyon",
        "phoneNumber": "2045104264",
        "email": "sfaoyon1@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2019", "vin": "WBA5R7C58KAJ79345" }]]
    },
    {
        "firstName": "Kunal",
        "lastName": "Chechi",
        "fullName": "Kunal Chechi",
        "phoneNumber": "2093617689",
        "email": "kunal_chechi@hotmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89f6fdee8c01c4ccfabbf", "modelId": "650d99ccfc162caf18242127", "year": "2015", "vin": "SAJXJ0FF3F8U48509" }]]
    },
    {
        "firstName": "Taylor ",
        "lastName": "Corbett",
        "fullName": "Taylor Corbett",
        "phoneNumber": "2267912715",
        "email": "taylor.7.corbett@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89b61dee8c01c4ccfab2f", "modelId": "650d99affc162caf18230903", "trimId": "6560462a99bf70b7fc2fd466", "year": "2017", "vin": "" }],
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "650d99affc162caf18230903",
                    "trimId": "650d9a44fc162caf18272b54",
                    "year": "2017",
                    "vin": "WA1VCAFP9HA007469"
                }
            ]
        ]
    },
    {
        "firstName": "Shabad",
        "lastName": "S",
        "fullName": "Shabad S",
        "phoneNumber": "2269985722",
        "email": "shabadjot22@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89c74dee8c01c4ccfab53",
                    "modelId": "650d99b3fc162caf182330d1",
                    "trimId": "650d9a45fc162caf18273516",
                    "year": "2017",
                    "vin": "1G1FB1RX0H0132349"
                }
            ]
        ]
    },
    {
        "firstName": "Onkar",
        "lastName": "Singh",
        "fullName": "Onkar Singh",
        "phoneNumber": "2892133731",
        "email": "onkarkahlon5@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89b61dee8c01c4ccfab2f", "trimId": "650d9a4afc162caf18274f1f", "year": "2017", "vin": "WAUANAF40HN036949" }]]
    },
    {
        "firstName": "Dinesh ",
        "lastName": "Henry",
        "fullName": "Dinesh Henry",
        "phoneNumber": "2892336806",
        "email": "dinesh.henry@gmail.com",
        "company": "",
        "vehicles": [
            [{ "trimId": "6560462a99bf70b7fc2fd466", "year": "2011", "vin": "" }],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "650d9a49fc162caf18274a5c", "year": "2011", "vin": "" }],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "6560462a99bf70b7fc2fd466", "year": "2011", "vin": "WDDGF8HB2BF592489" }]
        ]
    },
    {
        "firstName": "Matthew",
        "lastName": "Spence",
        "fullName": "Matthew Spence",
        "phoneNumber": "2898281950",
        "email": "1mattspence@gmail.com",
        "company": "",
        "vehicles": [
            [{ "modelId": "650d99e7fc162caf1824f869", "trimId": "6560462a99bf70b7fc2fd466", "year": "2012", "vin": "" }],
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e7fc162caf1824f869",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2012",
                    "vin": "WVWDA7AJ6CW346120"
                }
            ]
        ]
    },
    {
        "firstName": "Lovepreet ",
        "lastName": "Singh",
        "fullName": "Lovepreet Singh",
        "phoneNumber": "3654760021",
        "email": "lappidhimang@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a4bfc162caf182756cf",
                    "year": "2010",
                    "vin": "SALSH2E45AA218819"
                }
            ]
        ]
    },
    {
        "firstName": "Khadi",
        "lastName": "Larry",
        "fullName": "Khadi Larry",
        "phoneNumber": "3658858412",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf182316af",
                    "trimId": "650d9a45fc162caf18272e97",
                    "year": "2013",
                    "vin": "5UXWX9C51D0A09329"
                }
            ]
        ]
    },
    {
        "firstName": "Subhas",
        "lastName": "Persaud",
        "fullName": "Subhas Persaud",
        "phoneNumber": "4162193521",
        "email": "spersaud9@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89b61dee8c01c4ccfab2f", "trimId": "65e1892d5761f6f5ef28354d", "year": "2011", "vin": "" }]]
    },
    {
        "firstName": "Sandeep",
        "lastName": "Bains",
        "fullName": "Sandeep Bains",
        "phoneNumber": "4162579471",
        "email": "info@hospitalbedrent.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a0fddee8c01c4ccfac13",
                    "modelId": "650d99d4fc162caf182465b9",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2016",
                    "vin": "WD4BG2EE6G3076227"
                }
            ]
        ]
    },
    {
        "firstName": "Marissa",
        "lastName": "Rameshwar ",
        "fullName": "Marissa Rameshwar",
        "phoneNumber": "4162943578",
        "email": "marissadcorrea@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf182316af",
                    "trimId": "650d9a45fc162caf18272e97",
                    "year": "2016",
                    "vin": "5UXWX9C5XG0D65086"
                }
            ]
        ]
    },
    {
        "firstName": "Usman",
        "lastName": "Mansha",
        "fullName": "Usman Mansha",
        "phoneNumber": "4163006112",
        "email": "usman.mansha92@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89b61dee8c01c4ccfab2f", "trimId": "650d9a44fc162caf18272b54", "year": "2017", "vin": "WAUFNAF43HN010982" }]]
    },
    {
        "firstName": "Adam",
        "lastName": "Cobourn",
        "fullName": "Adam Cobourn",
        "phoneNumber": "4163013303",
        "email": "cobourn.adam@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2018", "vin": "WDDZH8KB1JA449475" }]]
    },
    {
        "firstName": "Nana",
        "lastName": "Osei",
        "fullName": "Nana Osei",
        "phoneNumber": "4163038252",
        "email": "iuppercut@yahoo.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2006", "vin": "WBAVB13526PT20804" }]]
    },
    {
        "firstName": "Amanpreet",
        "lastName": "Kainth",
        "fullName": "Amanpreet Kainth",
        "phoneNumber": "4163567140",
        "email": "aman11_preet@yahoo.ca",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2012",
                    "vin": "5UXZV4C53CL757628"
                }
            ]
        ]
    },
    {
        "firstName": "Jag",
        "lastName": "Aujla",
        "fullName": "Jag Aujla",
        "phoneNumber": "4163717777",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2018",
                    "vin": "5UXKR0C54J0Y03237"
                }
            ],
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2016",
                    "vin": "5UXKR0C57G0S93362"
                }
            ]
        ]
    },
    {
        "firstName": "Harpreet",
        "lastName": "Singh",
        "fullName": "Harpreet Singh",
        "phoneNumber": "4164026305",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a4bfc162caf18275740",
                    "year": "2019",
                    "vin": "SALWR2RKXKA822794"
                }
            ]
        ]
    },
    {
        "firstName": "Julius",
        "lastName": "Dela Cruz",
        "fullName": "Julius Dela Cruz",
        "phoneNumber": "4164143511",
        "email": "mj.may17.2009@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "6560462a99bf70b7fc2fd466", "year": "2019", "vin": "" }]]
    },
    {
        "firstName": "Andy ",
        "lastName": "Andy",
        "fullName": "Andy Andy",
        "phoneNumber": "4164179606",
        "email": "andy@skyrealty.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2010", "vin": "WBANV9C55AC138018" }]]
    },
    {
        "firstName": "Shayne",
        "lastName": "Yapp",
        "fullName": "Shayne Yapp",
        "phoneNumber": "4164279908",
        "email": "shayneyapp@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "6523bbbc78106ee71b86ded9",
                    "year": "2004",
                    "vin": "5UXFA13544LU36292"
                }
            ]
        ]
    },
    {
        "firstName": "Feizel",
        "lastName": "S",
        "fullName": "Feizel S",
        "phoneNumber": "4164288242",
        "email": "flms1@aol.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2007", "vin": "" }]]
    },
    {
        "firstName": "Maggy",
        "lastName": "Murray ",
        "fullName": "Maggy Murray",
        "phoneNumber": "4164353409",
        "email": "maggymurray@rogers.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a0fddee8c01c4ccfac13",
                    "modelId": "650d99d3fc162caf18245c55",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2013",
                    "vin": "WDDGF8JB8DA808680"
                }
            ],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2008", "vin": "WBAVA335X8KX87063" }],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2007", "vin": "" }]
        ]
    },
    {
        "firstName": "Reuel",
        "lastName": "Sassoon",
        "fullName": "Reuel Sassoon",
        "phoneNumber": "4164531982",
        "email": "reuelsassoon@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "6560462a99bf70b7fc2fd466", "year": "2011", "vin": "WDDFH3DBXBJ666074" }]]
    },
    {
        "firstName": "Ryan ",
        "lastName": "Monteath",
        "fullName": "Ryan Monteath",
        "phoneNumber": "4164573860",
        "email": "rmonteath@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "650d99affc162caf1823053d",
                    "trimId": "650d9a4afc162caf18274f1f",
                    "year": "2018",
                    "vin": "WA1AHAF79JD043893"
                }
            ]
        ]
    },
    {
        "firstName": "Maria",
        "lastName": "Gorospe",
        "fullName": "Maria Gorospe",
        "phoneNumber": "4165256178",
        "email": "elmerg@rogers.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2008", "vin": "4JGBF86E38A324828" }]]
    },
    {
        "firstName": "Vijay",
        "lastName": "Sagar",
        "fullName": "Vijay Sagar",
        "phoneNumber": "4165272122",
        "email": "vijays.fusion@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2012", "vin": "" }]]
    },
    {
        "firstName": "Max",
        "lastName": "Maxutov",
        "fullName": "Max Maxutov",
        "phoneNumber": "4165457704",
        "email": "maxutov@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a01bdee8c01c4ccfabe3", "trimId": "655f29b299a1a96abeb5f71e", "year": "2013", "vin": "" }]]
    },
    {
        "firstName": "Sahil",
        "lastName": "Bhardwaj",
        "fullName": "Sahil Bhardwaj",
        "phoneNumber": "4165617698",
        "email": "info@bblaw.ca",
        "company": "",
        "vehicles": [
            [{ "trimId": "6560462a99bf70b7fc2fd466", "year": "2013", "vin": "" }],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2013", "vin": "WDDLJ9BB6DA068774" }]
        ]
    },
    {
        "firstName": "Jon",
        "lastName": "Toonen",
        "fullName": "Jon Toonen",
        "phoneNumber": "4165733426",
        "email": "unL33T@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "modelId": "650d99b0fc162caf182316af", "trimId": "6523bbbc78106ee71b86deda", "year": "2007", "vin": "" }]
        ]
    },
    {
        "firstName": "Quin",
        "lastName": "Ballester ",
        "fullName": "Quin Ballester",
        "phoneNumber": "4165764018",
        "email": "ballesterquin@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2018", "vin": "WDDSJ4EB8JN509996" }]]
    },
    {
        "firstName": "Rajenbram",
        "lastName": "Uthayakumar",
        "fullName": "Rajenbram Uthayakumar",
        "phoneNumber": "4166022509",
        "email": "",
        "company": "",
        "vehicles": [[{ "trimId": "6560462a99bf70b7fc2fd466", "year": "2010", "vin": "" }]]
    },
    {
        "firstName": "Rishabh",
        "lastName": "Sharda",
        "fullName": "Rishabh Sharda",
        "phoneNumber": "4166179294",
        "email": "rishabhsharda067@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2013", "vin": "WBA3B3C52DJ810503" }]]
    },
    {
        "firstName": "Ranjit",
        "lastName": "Uppal",
        "fullName": "Ranjit Uppal",
        "phoneNumber": "4166523365",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2003", "vin": "WDBUF65J53A216802" }]]
    },
    {
        "firstName": "Srdy",
        "lastName": "Siva",
        "fullName": "Srdy Siva",
        "phoneNumber": "4166609660",
        "email": "arthik.s08@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2012", "vin": "" }]]
    },
    {
        "firstName": "Venkat",
        "lastName": "M",
        "fullName": "Venkat M",
        "phoneNumber": "4166662697",
        "email": "vmuddebihal@mississaugahyundai.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2015", "vin": "55SWF4KB4FU072486" }]]
    },
    {
        "firstName": "Julie",
        "lastName": "Coulter",
        "fullName": "Julie Coulter",
        "phoneNumber": "4167264015",
        "email": "juliecoultercths@gmail.com",
        "company": "",
        "vehicles": [[{ "trimId": "6560462a99bf70b7fc2fd466", "year": "", "vin": "" }]]
    },
    {
        "firstName": "Kaida",
        "lastName": "Lo",
        "fullName": "Kaida Lo",
        "phoneNumber": "4167319520",
        "email": "kd811860@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2011",
                    "vin": "5UXZV4C54BL412011"
                }
            ]
        ]
    },
    {
        "firstName": "Sam",
        "lastName": "Su",
        "fullName": "Sam Su",
        "phoneNumber": "4167939333",
        "email": "suziyuan1999@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a56adee8c01c4ccfac97",
                    "modelId": "650d99e3fc162caf1824e01f",
                    "trimId": "650d9a4bfc162caf182755f5",
                    "year": "2015",
                    "vin": "2T3BFREV1FW304846"
                }
            ]
        ]
    },
    {
        "firstName": "Jas",
        "lastName": "Nagi",
        "fullName": "Jas Nagi",
        "phoneNumber": "4168040462",
        "email": "jas@euromatic.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2005", "vin": "" }]]
    },
    {
        "firstName": "Gurmeet",
        "lastName": "Singh",
        "fullName": "Gurmeet Singh",
        "phoneNumber": "4168223345",
        "email": "singh.gmr@outlook.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "modelId": "650d99b0fc162caf182316af", "trimId": "650d9a45fc162caf18272e97", "year": "2014", "vin": "" }]
        ]
    },
    {
        "firstName": "Michelle ",
        "lastName": "Wang",
        "fullName": "Michelle Wang",
        "phoneNumber": "4168228702",
        "email": "michellewang77@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89b61dee8c01c4ccfab2f", "modelId": "650d99affc162caf1823053d", "trimId": "655f29b299a1a96abeb5f71e", "year": "2007", "vin": "" }]
        ]
    },
    {
        "firstName": "Jason",
        "lastName": "Bowen",
        "fullName": "Jason Bowen",
        "phoneNumber": "4168232706",
        "email": "kid1334@hotmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2016", "vin": "" }]]
    },
    {
        "firstName": "Sukpal",
        "lastName": "Toor",
        "fullName": "Sukpal Toor",
        "phoneNumber": "4168447344",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2018", "vin": "WBA4W9C50JAC09097" }]]
    },
    {
        "firstName": "Oshane",
        "lastName": "Young",
        "fullName": "Oshane Young",
        "phoneNumber": "4168465450",
        "email": "oshaneyoung848@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf182316af",
                    "trimId": "650d9a45fc162caf18272e97",
                    "year": "2011",
                    "vin": "5UXWX5C50BL703754"
                }
            ]
        ]
    },
    {
        "firstName": "Mustafa",
        "lastName": "Khan",
        "fullName": "Mustafa Khan",
        "phoneNumber": "4168573501",
        "email": "mustafanajmi99@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2017", "vin": "WBAJE7C36HG889522" }]]
    },
    {
        "firstName": "Jerome",
        "lastName": "Mcfarlance",
        "fullName": "Jerome Mcfarlance",
        "phoneNumber": "4168784365",
        "email": "mcfarjer@outlook.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2007", "vin": "WBAVA33537FV65374" }]]
    },
    {
        "firstName": "Jamil",
        "lastName": "Frig",
        "fullName": "Jamil Frig",
        "phoneNumber": "4168806497",
        "email": "jamil.lgds@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "650d99affc162caf18230883",
                    "trimId": "650d9a44fc162caf182729f2",
                    "year": "2016",
                    "vin": "WAUF2AFCXGN084754"
                }
            ]
        ]
    },
    {
        "firstName": "Ameil",
        "lastName": "Gill",
        "fullName": "Ameil Gill",
        "phoneNumber": "4168841359",
        "email": "ameil.thegillteam@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a24bdee8c01c4ccfac4f",
                    "modelId": "650d99dbfc162caf1824a047",
                    "trimId": "650d9a50fc162caf18276b47",
                    "year": "2016",
                    "vin": "WP0AA2A99GS106083"
                }
            ]
        ]
    },
    {
        "firstName": "Mini",
        "lastName": "Misir",
        "fullName": "Mini Misir",
        "phoneNumber": "4168942513",
        "email": "minimisir@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a4bfc162caf18275740",
                    "year": "2016",
                    "vin": "SALWR2KF3GA564767"
                }
            ]
        ]
    },
    {
        "firstName": "Cassandra",
        "lastName": "Mellanson ",
        "fullName": "Cassandra Mellanson",
        "phoneNumber": "4168953707",
        "email": "caseywildfern@hotmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "modelId": "650d99b0fc162caf1823165d", "trimId": "650d9a45fc162caf18272f24", "year": "2014", "vin": "" }],
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2014",
                    "vin": "5UXKR0C59E0H18130"
                }
            ]
        ]
    },
    {
        "firstName": "Theresa ",
        "lastName": "Berdoe-Young ",
        "fullName": "Theresa Berdoe-Young",
        "phoneNumber": "4169373007",
        "email": "tberdoeyoung@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89feedee8c01c4ccfabdd", "modelId": "650d99cffc162caf18243eeb", "trimId": "650d9a4bfc162caf18275740", "year": "2012", "vin": "" }],
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a4bfc162caf1827564b",
                    "year": "2012",
                    "vin": "SALSK2D44CA747779"
                }
            ]
        ]
    },
    {
        "firstName": "Dimitri",
        "lastName": "Beline",
        "fullName": "Dimitri Beline",
        "phoneNumber": "4169377772",
        "email": "dimitri.beline@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2020", "vin": "" }]]
    },
    {
        "firstName": "Peter",
        "lastName": "Marczak",
        "fullName": "Peter Marczak",
        "phoneNumber": "4169495638",
        "email": "petermarczak@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2011", "vin": "WBAPN7C5XBF184831" }]]
    },
    {
        "firstName": "Bauda",
        "lastName": "Michael",
        "fullName": "Bauda Michael",
        "phoneNumber": "4169708395",
        "email": "baudamichael@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e7fc162caf1824fcc9",
                    "trimId": "650d9a49fc162caf18274d66",
                    "year": "2014",
                    "vin": "3VW1K7AJ1EM240898"
                }
            ]
        ]
    },
    {
        "firstName": "Steven",
        "lastName": "Kim",
        "fullName": "Steven Kim",
        "phoneNumber": "4169922548",
        "email": "skimmar@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a138dee8c01c4ccfac1f",
                    "modelId": "650d99d5fc162caf18246ffd",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2012",
                    "vin": "WMWSU3C53CT262309"
                }
            ]
        ]
    },
    {
        "firstName": "Alex",
        "lastName": "Hua",
        "fullName": "Alex Hua",
        "phoneNumber": "4169983902",
        "email": "ahua@hotmail.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2015", "vin": "WBA1J9C55FVX99263" }]]
    },
    {
        "firstName": "Abdallah",
        "lastName": "Qasem",
        "fullName": "Abdallah Qasem",
        "phoneNumber": "6478646644",
        "email": "abyqasem@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89feedee8c01c4ccfabdd", "modelId": "650d99cffc162caf18243e3b", "trimId": "650d9a49fc162caf18274a62", "year": "2020", "vin": "" }],
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243e3b",
                    "trimId": "650d9a49fc162caf18274d66",
                    "year": "2020",
                    "vin": "SALZJ2FX9LH054688"
                }
            ]
        ]
    },
    {
        "firstName": "2383503 Ontario Inc",
        "lastName": "Sidhu",
        "fullName": "2383503 Ontario Inc Sidhu",
        "phoneNumber": "6476281790",
        "email": "sidhuguriekwal@yahoo.com",
        "company": "2383503 Ontario Inc",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2014", "vin": "4JGDA2EB2EA377463" }]]
    },
    {
        "firstName": "Abdullah",
        "lastName": "Rafi",
        "fullName": "Abdullah Rafi",
        "phoneNumber": "6477715707",
        "email": "AbdullahRafi@live.ca",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e7fc162caf1824f869",
                    "trimId": "650d9a49fc162caf18274a62",
                    "year": "2015",
                    "vin": "3VW217AU5FM007139"
                }
            ],
            [{ "makeId": "64e8a5f2dee8c01c4ccfac9d", "modelId": "650d99e7fc162caf1824f869", "trimId": "6560462a99bf70b7fc2fd466", "year": "2015", "vin": "" }]
        ]
    },
    {
        "firstName": "Abhishek",
        "lastName": "Bhowmik",
        "fullName": "Abhishek Bhowmik",
        "phoneNumber": "6478641799",
        "email": "abhi.b@hotmail.ca",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a5f2dee8c01c4ccfac9d", "modelId": "650d99e8fc162caf18250379", "trimId": "650d9a49fc162caf18274d66", "year": "2014", "vin": "" }],
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e8fc162caf18250379",
                    "trimId": "650d9a49fc162caf18274a62",
                    "year": "2014",
                    "vin": "1VWBS7A37EC106145"
                }
            ]
        ]
    },
    {
        "firstName": "Adrian ",
        "lastName": "Graham",
        "fullName": "Adrian Graham",
        "phoneNumber": "6472678858",
        "email": "graham955@btinternet.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243cdb",
                    "trimId": "650d9a4bfc162caf18275740",
                    "year": "2006",
                    "vin": "SALME154X6A199896"
                }
            ]
        ]
    },
    {
        "firstName": "8529817",
        "lastName": "Canada Inc.",
        "fullName": "8529817 Canada Inc.",
        "phoneNumber": "5142772746",
        "email": "avtransqc@outlook.com",
        "company": "8529817 Canada Inc.",
        "vehicles": [
            [{ "makeId": "64e89f6fdee8c01c4ccfabbf", "year": "2013", "vin": "" }],
            [{ "makeId": "64e89f6fdee8c01c4ccfabbf", "trimId": "6560462a99bf70b7fc2fd466", "year": "2013", "vin": "SAJXJ2GD0D8V45494" }]
        ]
    },
    {
        "firstName": "Afshin",
        "lastName": "Davarmanesh",
        "fullName": "Afshin Davarmanesh",
        "phoneNumber": "6478023917",
        "email": "afshindavar@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e9fc162caf18250883",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2005",
                    "vin": "WVGBG67L25D071123"
                }
            ]
        ]
    },
    {
        "firstName": "Ahsan",
        "lastName": "Kafeel",
        "fullName": "Ahsan Kafeel",
        "phoneNumber": "6476283737",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2017",
                    "vin": "5UXKR0C38H0X81803"
                }
            ]
        ]
    },
    {
        "firstName": "Akash",
        "lastName": "Sharma",
        "fullName": "Akash Sharma",
        "phoneNumber": "6476097300",
        "email": "AKASHSHARMA201010@GMAIL.COM",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e9fc162caf18250753",
                    "trimId": "650d9a49fc162caf18274d0f",
                    "year": "2016",
                    "vin": "WVGJV7AX4GW044807"
                }
            ]
        ]
    },
    {
        "firstName": "Alyona",
        "lastName": "Borodemko",
        "fullName": "Alyona Borodemko",
        "phoneNumber": "6472947221",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a01bdee8c01c4ccfabe3", "trimId": "655f29b299a1a96abeb5f71e", "year": "2011", "vin": "2T2BK1BA9BC111679" }]]
    },
    {
        "firstName": "Amandeep Singh",
        "lastName": "Sohal",
        "fullName": "Amandeep Singh Sohal",
        "phoneNumber": "4377885676",
        "email": "jaissisohan@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2006", "vin": "WDBUF87J06X186487" }]]
    },
    {
        "firstName": "Amardeep",
        "lastName": "Bhango",
        "fullName": "Amardeep Bhango",
        "phoneNumber": "6474029834",
        "email": "bhango.amardeep@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89b61dee8c01c4ccfab2f", "trimId": "650d9a44fc162caf182729f2", "year": "2016", "vin": "WAUWGAFC9GN018231" }]]
    },
    {
        "firstName": "Amit",
        "lastName": "Amit",
        "fullName": "Amit Amit",
        "phoneNumber": "7788901232",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2008", "vin": "4JGBB22E18A306150" }]]
    },
    {
        "firstName": "Amrit",
        "lastName": "Pandhol",
        "fullName": "Amrit Pandhol",
        "phoneNumber": "6477812828",
        "email": "apandhol@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2012", "vin": "" }],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2012", "vin": "WBAKF9C55CE672501" }]
        ]
    },
    {
        "firstName": "Abhishek",
        "lastName": "Sharma",
        "fullName": "Abhishek Sharma",
        "phoneNumber": "6472136397",
        "email": "abhisheks.sharma@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf182316af",
                    "trimId": "6523bbbc78106ee71b86ded4",
                    "year": "2004",
                    "vin": "WBXPA73414WB22457"
                }
            ]
        ]
    },
    {
        "firstName": "Anthony",
        "lastName": "Graham",
        "fullName": "Anthony Graham",
        "phoneNumber": "4372356677",
        "email": "dimeadozem10a12@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b1fc162caf18231811",
                    "trimId": "650d9a45fc162caf18272eb2",
                    "year": "2011",
                    "vin": "5YMGZ0C51BLK14158"
                }
            ]
        ]
    },
    {
        "firstName": "Anil",
        "lastName": "Kumar ",
        "fullName": "Anil Kumar",
        "phoneNumber": "9057672785",
        "email": "Anil905683@yahoo.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2018", "vin": "WDDSJ4EB5JN623955" }],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2018", "vin": "" }]
        ]
    },
    {
        "firstName": "Ashutosh",
        "lastName": "Sinha",
        "fullName": "Ashutosh Sinha",
        "phoneNumber": "6476062779",
        "email": "ash.to.sin@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2013", "vin": "4JGDA2EB4DA137748" }]]
    },
    {
        "firstName": "Anton",
        "lastName": "Emmanuel",
        "fullName": "Anton Emmanuel",
        "phoneNumber": "6478528975",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2015",
                    "vin": "5UXKR0C51F0P01949"
                }
            ],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "modelId": "650d99b0fc162caf1823174d", "trimId": "6560462a99bf70b7fc2fd466", "year": "2017", "vin": "" }]
        ]
    },
    {
        "firstName": "Ashley",
        "lastName": "Jones",
        "fullName": "Ashley Jones",
        "phoneNumber": "6476767743",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2008", "vin": "WBAWC33588PD08370" }]]
    },
    {
        "firstName": "Auto Hub ",
        "lastName": "Inc.",
        "fullName": "Auto Hub Inc.",
        "phoneNumber": "6478214100",
        "email": "ginnisran@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2017", "vin": "55SWF4KB1HU200119" }]]
    },
    {
        "firstName": "Balvinder",
        "lastName": "Brar",
        "fullName": "Balvinder Brar",
        "phoneNumber": "9057834589",
        "email": "bbrar21@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a1a4dee8c01c4ccfac2b", "modelId": "650d99d8fc162caf18248703", "trimId": "650d9a49fc162caf18274d66", "year": "2018", "vin": "" }],
            [
                {
                    "makeId": "64e8a1a4dee8c01c4ccfac2b",
                    "modelId": "650d99d8fc162caf18248703",
                    "trimId": "650d9a48fc162caf18274745",
                    "year": "2018",
                    "vin": "5N1AZ2MG6JN119281"
                }
            ]
        ]
    },
    {
        "firstName": "Bilal",
        "lastName": "Khan",
        "fullName": "Bilal Khan",
        "phoneNumber": "6476186312",
        "email": "bilal.khan96@outlook.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89ba8dee8c01c4ccfab35",
                    "modelId": "650d99affc162caf18230b4d",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2014",
                    "vin": "SCBEC9ZA4EC090274"
                }
            ]
        ]
    },
    {
        "firstName": "Bryan",
        "lastName": "Jacobs",
        "fullName": "Bryan Jacobs",
        "phoneNumber": "9055152098",
        "email": "bejacobs77@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2019", "vin": "55SWF6EB0KU287235" }]]
    },
    {
        "firstName": "Bobby",
        "lastName": "Khan",
        "fullName": "Bobby Khan",
        "phoneNumber": "7053917175",
        "email": "nasimhedayet032@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2007", "vin": "4JGBB77E67A154421" }]]
    },
    {
        "firstName": "Bmw",
        "lastName": "M3",
        "fullName": "Bmw M3",
        "phoneNumber": "6472835382",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "65ddab9dcaa78be687618266",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2003",
                    "vin": "WBSBR93403PK00642"
                }
            ]
        ]
    },
    {
        "firstName": "Chris",
        "lastName": "N",
        "fullName": "Chris N",
        "phoneNumber": "6474911887",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a01bdee8c01c4ccfabe3", "trimId": "655f29b299a1a96abeb5f71e", "year": "2006", "vin": "JTHBE262765000120" }]]
    },
    {
        "firstName": "Ravi",
        "lastName": "Narrine",
        "fullName": "Ravi Narrine",
        "phoneNumber": "6477817125",
        "email": "artirs10@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "6523bbbc78106ee71b86deda",
                    "year": "2007",
                    "vin": "5UXFE43547L012783"
                }
            ]
        ]
    },
    {
        "firstName": "Cindy ",
        "lastName": "Silvera",
        "fullName": "Cindy Silvera",
        "phoneNumber": "6478710869",
        "email": "jermainejoduhaney@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2015", "vin": "" }],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2015", "vin": "WBA3B3C55FF545579" }]
        ]
    },
    {
        "firstName": "Chander Shekhar",
        "lastName": "Tanwar",
        "fullName": "Chander Shekhar Tanwar",
        "phoneNumber": "6473250017",
        "email": "deepakchauhan01794@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "6560462a99bf70b7fc2fd466", "year": "2012", "vin": "WDDGF8JB0CA731608" }]]
    },
    {
        "firstName": "Constantin",
        "lastName": "Constantin",
        "fullName": "Constantin Constantin",
        "phoneNumber": "4383668505",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "64ca4a5649581a61bb4530f8",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2011",
                    "vin": "WA1VFCFP5BA086830"
                }
            ]
        ]
    },
    {
        "firstName": "Clifford",
        "lastName": "Blackmore",
        "fullName": "Clifford Blackmore",
        "phoneNumber": "6132279041",
        "email": "cliffordblackmore11@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a24bdee8c01c4ccfac4f",
                    "modelId": "650d99dcfc162caf1824a60d",
                    "trimId": "650d9a49fc162caf18274d66",
                    "year": "2010",
                    "vin": "WP0AB2A77AL061366"
                }
            ]
        ]
    },
    {
        "firstName": "Darwyn ",
        "lastName": "Lewis",
        "fullName": "Darwyn Lewis",
        "phoneNumber": "6474685575",
        "email": "darwynlewis@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89b61dee8c01c4ccfab2f", "modelId": "650d99aefc162caf1822fcf5", "trimId": "650d9a55fc162caf18277b71", "year": "2012", "vin": "" }]
        ]
    },
    {
        "firstName": "Dawn",
        "lastName": "Nguyen",
        "fullName": "Dawn Nguyen",
        "phoneNumber": "6472155180",
        "email": "dawnpwr@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a5f2dee8c01c4ccfac9d", "trimId": "6560462a99bf70b7fc2fd466", "year": "2013", "vin": "" }],
            [{ "makeId": "64e8a5f2dee8c01c4ccfac9d", "modelId": "650d99e7fc162caf1824fcc9", "trimId": "650d9a55fc162caf18277b71", "year": "2013", "vin": "" }]
        ]
    },
    {
        "firstName": "Deontay",
        "lastName": "Watkis",
        "fullName": "Deontay Watkis",
        "phoneNumber": "6478037055",
        "email": "deontaywatkis66@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2016", "vin": "WBA4C9C57GG136953" }],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2016", "vin": "" }]
        ]
    },
    {
        "firstName": "Dexter",
        "lastName": "Sterling",
        "fullName": "Dexter Sterling",
        "phoneNumber": "6473317716",
        "email": "cegiebennett@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2012", "vin": "WBASP2C54CC338508" }]]
    },
    {
        "firstName": "Dezso",
        "lastName": "Horvath",
        "fullName": "Dezso Horvath",
        "phoneNumber": "6476168504",
        "email": "info@garantieavantageplus.ca",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "650d99affc162caf1823053d",
                    "trimId": "650d9a4afc162caf18274f1f",
                    "year": "2013",
                    "vin": "WA1CGCFE6DD010893"
                }
            ]
        ]
    },
    {
        "firstName": "Dharminder",
        "lastName": "Brar",
        "fullName": "Dharminder Brar",
        "phoneNumber": "6478049394",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a56adee8c01c4ccfac97",
                    "modelId": "650d99e2fc162caf1824d36b",
                    "trimId": "650d9a53fc162caf18277636",
                    "year": "2007",
                    "vin": "4T1BE46K47U693017"
                }
            ]
        ]
    },
    {
        "firstName": "Divyesh",
        "lastName": "Patel",
        "fullName": "Divyesh Patel",
        "phoneNumber": "6472175481",
        "email": "divyesh.0009@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2016", "vin": "" }]]
    },
    {
        "firstName": "Edward",
        "lastName": "Alao",
        "fullName": "Edward Alao",
        "phoneNumber": "6478780033",
        "email": "edwardalao70@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2013", "vin": "4JGDF7CE0DA154462" }],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2014", "vin": "4JGDA2EB8EA390119" }]
        ]
    },
    {
        "firstName": "Dj",
        "lastName": "Dj",
        "fullName": "Dj Dj",
        "phoneNumber": "6476488141",
        "email": "info@devicodesutos.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e7fc162caf1824fcc9",
                    "trimId": "650d9a49fc162caf18274d66",
                    "year": "2013",
                    "vin": "3VW2K7AJ4DM359418"
                }
            ]
        ]
    },
    {
        "firstName": "Dustin",
        "lastName": "Sidhu",
        "fullName": "Dustin Sidhu",
        "phoneNumber": "6479279156",
        "email": "dustinsidhu@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2017", "vin": "WBA8D9C32HA004572" }]]
    },
    {
        "firstName": "Edward",
        "lastName": "Garrett",
        "fullName": "Edward Garrett",
        "phoneNumber": "9055205139",
        "email": "garrettteddy@yahoo.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2010", "vin": "" }]]
    },
    {
        "firstName": "Fidanza",
        "lastName": "Francesco",
        "fullName": "Fidanza Francesco",
        "phoneNumber": "4388889402",
        "email": "info@garantieavantageplus.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2015", "vin": "WDDSJ4GB1FN251177" }]]
    },
    {
        "firstName": "Faisal",
        "lastName": "Ranjha",
        "fullName": "Faisal Ranjha",
        "phoneNumber": "4378707770",
        "email": "faisalfazal11@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89e04dee8c01c4ccfab83",
                    "modelId": "64ca4a1d49581a61bb4530da",
                    "trimId": "650d9a47fc162caf1827401d",
                    "year": "2022",
                    "vin": "2FMPK4K97NBA47197"
                }
            ]
        ]
    },
    {
        "firstName": "Gur",
        "lastName": "Sahota",
        "fullName": "Gur Sahota",
        "phoneNumber": "6479640406",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2012", "vin": "4JGBF2FE1CA762575" }]]
    },
    {
        "firstName": "Ginni",
        "lastName": "Si",
        "fullName": "Ginni Si",
        "phoneNumber": "7059757003",
        "email": "",
        "company": "Impact IAA",
        "vehicles": [[{ "makeId": "64e89b61dee8c01c4ccfab2f", "trimId": "650d9a4afc162caf18274f1f", "year": "2017", "vin": "WAUANAF4XHN014053" }]]
    },
    {
        "firstName": "Hamza ",
        "lastName": "Khan ",
        "fullName": "Hamza Khan",
        "phoneNumber": "4372449097",
        "email": "hamzaafsarkhan10@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2017", "vin": "WBA8D9G59HNT91304" }]]
    },
    {
        "firstName": "Gurshan ",
        "lastName": "Singh ",
        "fullName": "Gurshan Singh",
        "phoneNumber": "6477611220",
        "email": "ggandham@uwaterloo.ca",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2013", "vin": "" }],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2013", "vin": "WBA3B3C50DF538410" }]
        ]
    },
    {
        "firstName": "Gursimran",
        "lastName": "Singh",
        "fullName": "Gursimran Singh",
        "phoneNumber": "6473764950",
        "email": "",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89c74dee8c01c4ccfab53", "modelId": "650d99b4fc162caf1823392f", "trimId": "650d9a49fc162caf18274da1", "year": "2013", "vin": "" }]
        ]
    },
    {
        "firstName": "Harjinder",
        "lastName": "Sandhu",
        "fullName": "Harjinder Sandhu",
        "phoneNumber": "6475639394",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2014", "vin": "WBA3C3C50EF985088" }]]
    },
    {
        "firstName": "Hamza",
        "lastName": "Hameed",
        "fullName": "Hamza Hameed",
        "phoneNumber": "6473380163",
        "email": "aishamzaa@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "650d99affc162caf1823071f",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2011",
                    "vin": "WAUFGCFL7BA044905"
                }
            ]
        ]
    },
    {
        "firstName": "Harshil ",
        "lastName": "Poojara",
        "fullName": "Harshil Poojara",
        "phoneNumber": "6475495745",
        "email": "harshil.bo@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "6560462a99bf70b7fc2fd466", "year": "2018", "vin": "" }],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2018", "vin": "4JGDA5GB2JB126221" }],
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "650d99aefc162caf1822fe21",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2013",
                    "vin": "WAUEFAFL8DN049450"
                }
            ]
        ]
    },
    {
        "firstName": "Igor",
        "lastName": "Gulko",
        "fullName": "Igor Gulko",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "651e92a783b725e925b9e8b1",
                    "modelId": "650d99dffc162caf1824bc67",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2005",
                    "vin": "WMEAJ00F95J218270"
                }
            ],
            [
                {
                    "makeId": "64e89c74dee8c01c4ccfab53",
                    "modelId": "650d99b4fc162caf1823392f",
                    "trimId": "650d9a45fc162caf1827348b",
                    "year": "2015",
                    "vin": "1G1P75SZ8F7214052"
                }
            ],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2009", "vin": "WBAKA83599CY33526" }],
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272ef7",
                    "year": "2011",
                    "vin": "5UXZW0C53BL660806"
                }
            ],
            [{ "makeId": "64e89b61dee8c01c4ccfab2f", "modelId": "650d99aefc162caf1822fe21", "trimId": "6560462a99bf70b7fc2fd466", "year": "2018", "vin": "" }],
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a4bfc162caf1827564b",
                    "year": "2012",
                    "vin": "SALSK2D48CA746327"
                }
            ],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2009", "vin": "WDBUF87X99B379906" }],
            [
                {
                    "makeId": "64e89c74dee8c01c4ccfab53",
                    "modelId": "650d99b4fc162caf1823392f",
                    "trimId": "650d9a45fc162caf18273516",
                    "year": "2014",
                    "vin": "1G1PC5SB3E7363336"
                }
            ],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2006", "vin": "WDBUF87J06X186487" }]
        ]
    },
    {
        "firstName": "Jackson",
        "lastName": "Salvanna",
        "fullName": "Jackson Salvanna",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [
            {
                "makeId": "64e89c74dee8c01c4ccfab53",
                "modelId": "650d99b4fc162caf1823392f",
                "trimId": "650d9a45fc162caf1827348b",
                "year": "2015",
                "vin": "1G1P75SZ8F7214052"
            }
        ]
    },
    {
        "firstName": "Kartsonas",
        "lastName": "Chouzouris",
        "fullName": "Kartsonas Chouzouris",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2009", "vin": "WBAKA83599CY33526" }]
    },
    {
        "firstName": "Kiranjit",
        "lastName": "Multani",
        "fullName": "Kiranjit Multani",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [
            {
                "makeId": "64e89bbfdee8c01c4ccfab3b",
                "modelId": "650d99b0fc162caf1823174d",
                "trimId": "650d9a45fc162caf18272ef7",
                "year": "2011",
                "vin": "5UXZW0C53BL660806"
            }
        ]
    },
    {
        "firstName": "Mohamed Alkil",
        "lastName": "Bharoocha",
        "fullName": "Mohamed Alkil Bharoocha",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [
            { "makeId": "64e89b61dee8c01c4ccfab2f", "modelId": "650d99aefc162caf1822fe21", "trimId": "6560462a99bf70b7fc2fd466", "year": "2018", "vin": "" }
        ]
    },
    {
        "firstName": "Nitin",
        "lastName": "Shahji",
        "fullName": "Nitin Shahji",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [
            {
                "makeId": "64e89feedee8c01c4ccfabdd",
                "modelId": "650d99cffc162caf18243eeb",
                "trimId": "650d9a4bfc162caf1827564b",
                "year": "2012",
                "vin": "SALSK2D48CA746327"
            }
        ]
    },
    {
        "firstName": "Prabhdeep",
        "lastName": "Gill",
        "fullName": "Prabhdeep Gill",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2009", "vin": "WDBUF87X99B379906" }]
    },
    {
        "firstName": "14011414",
        "lastName": "Canada Inc.",
        "fullName": "14011414 Canada Inc.",
        "phoneNumber": "",
        "email": "tejindersingh320@gmail.com",
        "company": "",
        "vehicles": [
            {
                "makeId": "64e89c74dee8c01c4ccfab53",
                "modelId": "650d99b4fc162caf1823392f",
                "trimId": "650d9a45fc162caf18273516",
                "year": "2014",
                "vin": "1G1PC5SB3E7363336"
            }
        ]
    },
    {
        "firstName": "Watson",
        "lastName": " George",
        "fullName": "Watson George",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2006", "vin": "WDBUF87J06X186487" }]
    },
    {
        "firstName": "Igor",
        "lastName": "Gulko",
        "fullName": "Igor Gulko",
        "phoneNumber": "",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "651e92a783b725e925b9e8b1",
                    "modelId": "650d99dffc162caf1824bc67",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2005",
                    "vin": "WMEAJ00F95J218270"
                }
            ],
            [
                {
                    "makeId": "64e89c74dee8c01c4ccfab53",
                    "modelId": "650d99b4fc162caf1823392f",
                    "trimId": "650d9a45fc162caf1827348b",
                    "year": "2015",
                    "vin": "1G1P75SZ8F7214052"
                }
            ],
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2009", "vin": "WBAKA83599CY33526" }],
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272ef7",
                    "year": "2011",
                    "vin": "5UXZW0C53BL660806"
                }
            ],
            [{ "makeId": "64e89b61dee8c01c4ccfab2f", "modelId": "650d99aefc162caf1822fe21", "trimId": "6560462a99bf70b7fc2fd466", "year": "2018", "vin": "" }],
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a4bfc162caf1827564b",
                    "year": "2012",
                    "vin": "SALSK2D48CA746327"
                }
            ],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2009", "vin": "WDBUF87X99B379906" }],
            [
                {
                    "makeId": "64e89c74dee8c01c4ccfab53",
                    "modelId": "650d99b4fc162caf1823392f",
                    "trimId": "650d9a45fc162caf18273516",
                    "year": "2014",
                    "vin": "1G1PC5SB3E7363336"
                }
            ],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2006", "vin": "WDBUF87J06X186487" }]
        ]
    },
    {
        "firstName": "Iryna ",
        "lastName": "Salo",
        "fullName": "Iryna Salo",
        "phoneNumber": "6478364083",
        "email": "stadnykmike@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "64ca4a5649581a61bb4530f8",
                    "trimId": "650d9a44fc162caf182729f2",
                    "year": "2017",
                    "vin": "WA1D7AFP9HA011425"
                }
            ],
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "65ddab9dcaa78be687618266",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2008",
                    "vin": "WBSWD93538PY39176"
                }
            ]
        ]
    },
    {
        "firstName": "Delcio",
        "lastName": "Mota",
        "fullName": "Delcio Mota",
        "phoneNumber": "6477219663",
        "email": "laylowlav@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89aacdee8c01c4ccfab17", "modelId": "650d99adfc162caf1822f78d", "trimId": "655f29b299a1a96abeb5f71e", "year": "2007", "vin": "" }]
        ]
    },
    {
        "firstName": "Ivan",
        "lastName": "Jacob",
        "fullName": "Ivan Jacob",
        "phoneNumber": "6476374719",
        "email": "ijacob7757@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2019", "vin": "WDDZF4KB7KA498969" }]]
    },
    {
        "firstName": "Jarnail",
        "lastName": "Singh",
        "fullName": "Jarnail Singh",
        "phoneNumber": "6473907731",
        "email": "jarnailbartoli855@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2011", "vin": "WBAFU7C56BC869585" }]]
    },
    {
        "firstName": "Jashanpreet ",
        "lastName": "Singh",
        "fullName": "Jashanpreet Singh",
        "phoneNumber": "6478625300",
        "email": "sandhujashan264@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e7fc162caf1824fcc9",
                    "trimId": "650d9a49fc162caf18274d0f",
                    "year": "2021",
                    "vin": "3VWE57BU3MM072682"
                }
            ]
        ]
    },
    {
        "firstName": "Jansher",
        "lastName": "Sekhon",
        "fullName": "Jansher Sekhon",
        "phoneNumber": "6479276191",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2015", "vin": "55SWF4KB0FU035502" }]]
    },
    {
        "firstName": "Jaideep",
        "lastName": "N",
        "fullName": "Jaideep N",
        "phoneNumber": "6479655557",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89e04dee8c01c4ccfab83",
                    "modelId": "650d99bdfc162caf18239497",
                    "trimId": "650d9a47fc162caf182741ca",
                    "year": "2016",
                    "vin": "1FTFW1EFXGFC62174"
                }
            ]
        ]
    },
    {
        "firstName": "Jason",
        "lastName": "George",
        "fullName": "Jason George",
        "phoneNumber": "6479704242",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2011", "vin": "WBAFU9C50BC784141" }]]
    },
    {
        "firstName": "Jason",
        "lastName": "Russell",
        "fullName": "Jason Russell",
        "phoneNumber": "6477859345",
        "email": "jayruss6@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "6560462a99bf70b7fc2fd466", "year": "2011", "vin": "WDDNF8EB9BA387910" }],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2008", "vin": "4JGBF71E18A418496" }]
        ]
    },
    {
        "firstName": "Jaspal",
        "lastName": "Singh",
        "fullName": "Jaspal Singh",
        "phoneNumber": "6478282475",
        "email": "jassi_jazz077@hotmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89ebbdee8c01c4ccfaba1",
                    "modelId": "650d99c7fc162caf1823f8a9",
                    "trimId": "650d9a49fc162caf18274a62",
                    "year": "2015",
                    "vin": "2HGFB2F79FH029832"
                }
            ],
            [
                {
                    "makeId": "64e89d32dee8c01c4ccfab65",
                    "modelId": "650d99bafc162caf18237187",
                    "trimId": "650d9a46fc162caf18273cda",
                    "year": "2014",
                    "vin": "2C4RDGDGXER380909"
                }
            ],
            [
                {
                    "makeId": "64e89cecdee8c01c4ccfab59",
                    "modelId": "650d99b8fc162caf182362b3",
                    "trimId": "650d9a49fc162caf18274d66",
                    "year": "2016",
                    "vin": "2C3CCABG0GH294465"
                }
            ]
        ]
    },
    {
        "firstName": "Jaspal",
        "lastName": "Multani",
        "fullName": "Jaspal Multani",
        "phoneNumber": "6476190481",
        "email": "jaspaljaspalmultani@hotmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2010", "vin": "WDCGG8HB7AF319161" }]]
    },
    {
        "firstName": "Jaspreet",
        "lastName": "Singh",
        "fullName": "Jaspreet Singh",
        "phoneNumber": "6476400059",
        "email": "jaspreet95dhillon@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a5f2dee8c01c4ccfac9d", "modelId": "650d99e8fc162caf18250379", "trimId": "650d9a49fc162caf18274d66", "year": "2014", "vin": "" }],
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e8fc162caf18250379",
                    "trimId": "650d9a49fc162caf18274a62",
                    "year": "2014",
                    "vin": "1VWBS7A3XEC102252"
                }
            ]
        ]
    },
    {
        "firstName": "Jayant",
        "lastName": "Baihal",
        "fullName": "Jayant Baihal",
        "phoneNumber": "6472954296",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "650d9a49fc162caf18274a5c", "year": "2008", "vin": "WDDGF87X58F073216" }]]
    },
    {
        "firstName": "Jon",
        "lastName": "Smith",
        "fullName": "Jon Smith",
        "phoneNumber": "6472084713",
        "email": "jags3565@icloud.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2011",
                    "vin": "5UXZV4C58BL405479"
                }
            ]
        ]
    },
    {
        "firstName": "John",
        "lastName": "Andreychuk",
        "fullName": "John Andreychuk",
        "phoneNumber": "9056700999",
        "email": "john@jgjackson.ca",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e9fc162caf18250883",
                    "trimId": "650d9a55fc162caf18277c18",
                    "year": "2014",
                    "vin": "WVGEP9BP0ED004626"
                }
            ]
        ]
    },
    {
        "firstName": "Joseph",
        "lastName": "John",
        "fullName": "Joseph John",
        "phoneNumber": "6477784054",
        "email": "jaj12003@yahoo.ca",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a4bfc162caf182756cf",
                    "year": "2011",
                    "vin": "SALSH2E49BA283755"
                }
            ]
        ]
    },
    {
        "firstName": "Justin",
        "lastName": "Do Couto",
        "fullName": "Justin Do Couto",
        "phoneNumber": "5145155650",
        "email": "haopps87@hotmail.ca",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a5f2dee8c01c4ccfac9d", "modelId": "65ddab20caa78be68761811c", "trimId": "650d9a54fc162caf1827790c", "year": "2016", "vin": "" }]
        ]
    },
    {
        "firstName": "Kamaljit",
        "lastName": "Gill",
        "fullName": "Kamaljit Gill",
        "phoneNumber": "4379730773",
        "email": "gill.kamaljit3@hotmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "651e92a783b725e925b9e8b1", "trimId": "6560462a99bf70b7fc2fd466", "year": "2012", "vin": "" }],
            [
                {
                    "makeId": "651e92a783b725e925b9e8b1",
                    "modelId": "650d99dffc162caf1824bc67",
                    "trimId": "650d9a4bfc162caf18275758",
                    "year": "2012",
                    "vin": "WMEEJ3BA6CK530199"
                }
            ]
        ]
    },
    {
        "firstName": "Karansingh ",
        "lastName": "Singh",
        "fullName": "Karansingh Singh",
        "phoneNumber": "4379744098",
        "email": "karansingh230498@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2020", "vin": "" }],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2020", "vin": "55SWF8EB4LU327152" }]
        ]
    },
    {
        "firstName": "Kanwaldeep",
        "lastName": "Singh",
        "fullName": "Kanwaldeep Singh",
        "phoneNumber": "6473285257",
        "email": "kanwaldeep.singh@dal.ca",
        "company": "",
        "vehicles": [[{ "trimId": "6560462a99bf70b7fc2fd466", "year": "2014", "vin": "" }]]
    },
    {
        "firstName": "Kevin",
        "lastName": "Beldor",
        "fullName": "Kevin Beldor",
        "phoneNumber": "5142618427",
        "email": "iverson902@hotmail.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2015", "vin": "WDDUG7JB9FA164006" }]]
    },
    {
        "firstName": "Leslie",
        "lastName": "Macleod",
        "fullName": "Leslie Macleod",
        "phoneNumber": "6473947879",
        "email": "lmacleod@blueicemedicle.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2012", "vin": "WBAFU7C54CDU65664" }]]
    },
    {
        "firstName": "Mandeep ",
        "lastName": "Singh",
        "fullName": "Mandeep Singh",
        "phoneNumber": "6478972202",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e8fc162caf18250379",
                    "trimId": "650d9a49fc162caf18274d66",
                    "year": "2020",
                    "vin": "1VWAA7A37LC007515"
                }
            ]
        ]
    },
    {
        "firstName": "Mark",
        "lastName": "M",
        "fullName": "Mark M",
        "phoneNumber": "6476710559",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b1fc162caf18231811",
                    "trimId": "650d9a45fc162caf18272eb2",
                    "year": "2011",
                    "vin": "5YMGZ0C55BLK14292"
                }
            ],
            [
                {
                    "makeId": "64e89fbbdee8c01c4ccfabd1",
                    "modelId": "650d99cefc162caf182437e3",
                    "trimId": "650d9a49fc162caf18274a47",
                    "year": "2012",
                    "vin": "KNDPB3A24C7339947"
                }
            ]
        ]
    },
    {
        "firstName": "Manjit",
        "lastName": "Singh",
        "fullName": "Manjit Singh",
        "phoneNumber": "6473280392",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2018", "vin": "4JGDA5GB4JB053871" }]]
    },
    {
        "firstName": "Mohammed",
        "lastName": "Ilyas",
        "fullName": "Mohammed Ilyas",
        "phoneNumber": "9055982930",
        "email": "ilyas@al-ameenschool.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89ba8dee8c01c4ccfab35",
                    "modelId": "650d99affc162caf18230ad9",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2013",
                    "vin": "SCBFR7ZA7DC079856"
                }
            ]
        ]
    },
    {
        "firstName": "Mohan",
        "lastName": "Brar",
        "fullName": "Mohan Brar",
        "phoneNumber": "6479155142",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2019", "vin": "WDC0G4KB0KV168965" }]]
    },
    {
        "firstName": "Mohit ",
        "lastName": "Singh ",
        "fullName": "Mohit Singh",
        "phoneNumber": "6472917269",
        "email": "mohitsgpd@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2013", "vin": "WDDGF7HB8DA773803" }]]
    },
    {
        "firstName": "Nabeel",
        "lastName": "Ahmed",
        "fullName": "Nabeel Ahmed",
        "phoneNumber": "6478046772",
        "email": "nabeel_batista@live.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2004", "vin": "WBABW534X4PJ94467" }]]
    },
    {
        "firstName": "Navjot",
        "lastName": "Thind",
        "fullName": "Navjot Thind",
        "phoneNumber": "6473384575",
        "email": "info@navjotthind.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243cdb",
                    "trimId": "650d9a4bfc162caf182756cf",
                    "year": "2016",
                    "vin": "SALGV2EFXGA314941"
                }
            ]
        ]
    },
    {
        "firstName": "Natasha",
        "lastName": "Norman",
        "fullName": "Natasha Norman",
        "phoneNumber": "9058670196",
        "email": "soraya463766366@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89aacdee8c01c4ccfab17",
                    "modelId": "64e8aa89dee8c01c4ccfaccd",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2008",
                    "vin": "2HNYD28228H000107"
                }
            ]
        ]
    },
    {
        "firstName": "Msp Fine Automible ",
        "lastName": "Msp",
        "fullName": "Msp Fine Automible Msp",
        "phoneNumber": "6479935384",
        "email": "",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a49fc162caf18274a62",
                    "year": "2014",
                    "vin": "SALWR2WF2EA33973"
                }
            ]
        ]
    },
    {
        "firstName": "Nathan",
        "lastName": "Valli",
        "fullName": "Nathan Valli",
        "phoneNumber": "4372596008",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2009", "vin": "4JGBB86E89A515917" }]]
    },
    {
        "firstName": "Navrander",
        "lastName": "Lalli",
        "fullName": "Navrander Lalli",
        "phoneNumber": "6472860915",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a01bdee8c01c4ccfabe3", "trimId": "655f29b299a1a96abeb5f71e", "year": "2010", "vin": "JTJBK1BA3A2403438" }]]
    },
    {
        "firstName": "Mohsen",
        "lastName": "Assadzadeh",
        "fullName": "Mohsen Assadzadeh",
        "phoneNumber": "6475710187",
        "email": "mohsenassadzadeh@icloud.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823165d",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2012",
                    "vin": "WBAVL1C55CVR77729"
                }
            ]
        ]
    },
    {
        "firstName": "Navyug",
        "lastName": "Singh",
        "fullName": "Navyug Singh",
        "phoneNumber": "4379845025",
        "email": "navhunnadal315@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e7fc162caf1824fcc9",
                    "trimId": "650d9a49fc162caf18274d66",
                    "year": "2019",
                    "vin": "3VWC57BU4KM144493"
                }
            ]
        ]
    },
    {
        "firstName": "New Tech",
        "lastName": "New Tech Auto Body Repair Limited",
        "fullName": "New Tech New Tech Auto Body Repair Limited",
        "phoneNumber": "9057966767",
        "email": "info@euromatic.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e89b61dee8c01c4ccfab2f", "trimId": "650d9a44fc162caf182729f2", "year": "2017", "vin": "WAUENAF47HN016425" }]]
    },
    {
        "firstName": "Neha ",
        "lastName": "Nagi",
        "fullName": "Neha Nagi",
        "phoneNumber": "4372495757",
        "email": "Nehakoundal274@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2005", "vin": "WBAEP33405PF050" }]]
    },
    {
        "firstName": "Neeraj",
        "lastName": "Chamdal",
        "fullName": "Neeraj Chamdal",
        "phoneNumber": "6477090140",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2011", "vin": "WBAFU7C50BC782183" }]]
    },
    {
        "firstName": "Onkar  Singh",
        "lastName": "Rai",
        "fullName": "Onkar  Singh Rai",
        "phoneNumber": "6474473027",
        "email": "onkarrai@gmail.com",
        "company": "",
        "vehicles": [[{ "trimId": "6560462a99bf70b7fc2fd466", "year": "2011", "vin": "" }]]
    },
    {
        "firstName": "Oleksandz",
        "lastName": "Pashko",
        "fullName": "Oleksandz Pashko",
        "phoneNumber": "6478626856",
        "email": "sancho_pashko@mail.ru",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89c74dee8c01c4ccfab53",
                    "modelId": "650d99b4fc162caf1823392f",
                    "trimId": "650d9a45fc162caf18273516",
                    "year": "2013",
                    "vin": "1G1PC5SB2D7220473"
                }
            ]
        ]
    },
    {
        "firstName": "Olivia",
        "lastName": "Syson",
        "fullName": "Olivia Syson",
        "phoneNumber": "6477811767",
        "email": "oliviasyson@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a0fddee8c01c4ccfac13",
                    "modelId": "650d99d3fc162caf18245c55",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2013",
                    "vin": "WDDGF8JB7DA840746"
                }
            ],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2013", "vin": "" }]
        ]
    },
    {
        "firstName": "Paras",
        "lastName": "Toor",
        "fullName": "Paras Toor",
        "phoneNumber": "6045378397",
        "email": "paraspal.singh@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243eeb",
                    "trimId": "650d9a4bfc162caf18275740",
                    "year": "2016",
                    "vin": "SALWR2KF1GA594964"
                }
            ]
        ]
    },
    {
        "firstName": "Pardeep",
        "lastName": "Singh",
        "fullName": "Pardeep Singh",
        "phoneNumber": "6473250667",
        "email": "deep_singh1985@live.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2015", "vin": "WDDSJ4GB3FN272032" }]]
    },
    {
        "firstName": "Parbhu ",
        "lastName": "Singh ",
        "fullName": "Parbhu Singh",
        "phoneNumber": "9056016507",
        "email": "parbhusingh@yahoo.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2007", "vin": "4JGBF22E17A263691" }]]
    },
    {
        "firstName": "Prajakta",
        "lastName": "Jalli",
        "fullName": "Prajakta Jalli",
        "phoneNumber": "6476249082",
        "email": "jalliprajakta@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2020", "vin": "WDD3G4FB3LW041285" }]]
    },
    {
        "firstName": "Rahul",
        "lastName": "J",
        "fullName": "Rahul J",
        "phoneNumber": "6475306518",
        "email": "jallirahul@hotmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2017", "vin": "" }]]
    },
    {
        "firstName": "Raj",
        "lastName": "Chahal",
        "fullName": "Raj Chahal",
        "phoneNumber": "6472930057",
        "email": "",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "trimId": "655f29b299a1a96abeb5f71e", "year": "2002", "vin": "WDCYR49E12X129741" }],
            [{ "makeId": "64e8a087dee8c01c4ccfabfb", "trimId": "6560462a99bf70b7fc2fd466", "year": "2014", "vin": "" }]
        ]
    },
    {
        "firstName": "Rafael",
        "lastName": "Melendez",
        "fullName": "Rafael Melendez",
        "phoneNumber": "6478231984",
        "email": "rafaelbmelendez@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2015", "vin": "WBA3B3G52FNT17569" }]]
    },
    {
        "firstName": "Rakeem",
        "lastName": "Sutton",
        "fullName": "Rakeem Sutton",
        "phoneNumber": "4372595336",
        "email": "r91sutton@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89feedee8c01c4ccfabdd", "modelId": "650d99cffc162caf18243eeb", "trimId": "650d9a4bfc162caf18275740", "year": "2017", "vin": "" }]
        ]
    },
    {
        "firstName": "Ranita",
        "lastName": "Nandlall",
        "fullName": "Ranita Nandlall",
        "phoneNumber": "6474062930",
        "email": "aaronmm@hotmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89bbfdee8c01c4ccfab3b", "modelId": "650d99b0fc162caf1823171b", "trimId": "650d9a45fc162caf18272e97", "year": "2015", "vin": "" }],
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823171b",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2015",
                    "vin": "5UXXW5C57F0E87757"
                }
            ]
        ]
    },
    {
        "firstName": "Richard",
        "lastName": "S",
        "fullName": "Richard S",
        "phoneNumber": "6473385157",
        "email": "richsem2k01@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a087dee8c01c4ccfabfb",
                    "modelId": "650d99d1fc162caf18244c53",
                    "trimId": "650d9a4cfc162caf18275b22",
                    "year": "2017",
                    "vin": "ZAM57RTS6H1228783"
                }
            ]
        ]
    },
    {
        "firstName": "Manish",
        "lastName": "Banga",
        "fullName": "Manish Banga",
        "phoneNumber": "6478983543",
        "email": "manishbanga07@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a1a4dee8c01c4ccfac2b",
                    "modelId": "650d99d7fc162caf1824851d",
                    "trimId": "650d9a4ffc162caf182768ce",
                    "year": "2014",
                    "vin": "JN8AF5MV6ET480402"
                }
            ]
        ]
    },
    {
        "firstName": "Satwinder",
        "lastName": "Gandham",
        "fullName": "Satwinder Gandham",
        "phoneNumber": "6477008371",
        "email": "ritugandham@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89ebbdee8c01c4ccfaba1", "modelId": "650d99c8fc162caf1823ff19", "trimId": "650d9a49fc162caf18274a6b", "year": "2011", "vin": "" }],
            [
                {
                    "makeId": "64e89ebbdee8c01c4ccfaba1",
                    "modelId": "650d99c8fc162caf1823ff19",
                    "trimId": "650d9a49fc162caf18274a47",
                    "year": "2011",
                    "vin": "5J6RE4H30BL802767"
                }
            ]
        ]
    },
    {
        "firstName": "Romi",
        "lastName": "Rafael ",
        "fullName": "Romi Rafael",
        "phoneNumber": "6479016309",
        "email": "romrafael321@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2010", "vin": "4JGBF2FE7AA608093" }]]
    },
    {
        "firstName": "Saikiran",
        "lastName": "Surity",
        "fullName": "Saikiran Surity",
        "phoneNumber": "6473282825",
        "email": "surity.kiran@hotmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243e3b",
                    "trimId": "650d9a4bfc162caf18275758",
                    "year": "2015",
                    "vin": "SALVP2BG9FH063141"
                }
            ]
        ]
    },
    {
        "firstName": "Sarah",
        "lastName": "Najib",
        "fullName": "Sarah Najib",
        "phoneNumber": "9055997140",
        "email": "sarah.najib19@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2018", "vin": "WDDZF6GB2JA314945" }]]
    },
    {
        "firstName": "Razin",
        "lastName": "Ahmed",
        "fullName": "Razin Ahmed",
        "phoneNumber": "6479905740",
        "email": "razinahmed95@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "650d99aefc162caf1822fe21",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2017",
                    "vin": "WAUCNAF42HN007123"
                }
            ]
        ]
    },
    {
        "firstName": "Sharanjit ",
        "lastName": "Singh",
        "fullName": "Sharanjit Singh",
        "phoneNumber": "6477107042",
        "email": "sharancheema14@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2009", "vin": "4JGBF25E69A523887" }]]
    },
    {
        "firstName": "Sohail",
        "lastName": "Bhatti",
        "fullName": "Sohail Bhatti",
        "phoneNumber": "6478896653",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2012", "vin": "WBAKC8C57CC435376" }]]
    },
    {
        "firstName": "Shobit",
        "lastName": "Kataria",
        "fullName": "Shobit Kataria",
        "phoneNumber": "5145810522",
        "email": "info@garantieavantageplus.ca",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2017", "vin": "55SWF4KBOHU192594" }]]
    },
    {
        "firstName": "Shadi ",
        "lastName": "Aljourjous",
        "fullName": "Shadi Aljourjous",
        "phoneNumber": "6416853971",
        "email": "",
        "company": "",
        "vehicles": [[{ "makeId": "64e89b61dee8c01c4ccfab2f", "trimId": "650d9a44fc162caf182729f2", "year": "2017", "vin": "WAUENAF45HN038309" }]]
    },
    {
        "firstName": "Superstar ",
        "lastName": "Motors ",
        "fullName": "Superstar Motors",
        "phoneNumber": "4372207790",
        "email": "superstarmotors.ca@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2010", "vin": "" }]]
    },
    {
        "firstName": "Farouk Omar",
        "lastName": "Boateng",
        "fullName": "Farouk Omar Boateng",
        "phoneNumber": "4377884845",
        "email": "o.fboateng@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89ebbdee8c01c4ccfaba1",
                    "modelId": "650d99c7fc162caf1823f8a9",
                    "trimId": "650d9a49fc162caf18274a6b",
                    "year": "2016",
                    "vin": "2HGFC2F83GH001418"
                }
            ]
        ]
    },
    {
        "firstName": "Tajinder",
        "lastName": "Singh",
        "fullName": "Tajinder Singh",
        "phoneNumber": "6476798894",
        "email": "tejindersingh320@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89c74dee8c01c4ccfab53", "modelId": "650d99b4fc162caf1823392f", "trimId": "650d9a49fc162caf18274da1", "year": "2014", "vin": "" }]
        ]
    },
    {
        "firstName": "Taranjot",
        "lastName": "Singh",
        "fullName": "Taranjot Singh",
        "phoneNumber": "4372480341",
        "email": "taranjotkaursingh@gmail.com",
        "company": "",
        "vehicles": [
            [{ "makeId": "64e89b61dee8c01c4ccfab2f", "modelId": "650d99affc162caf182306f5", "trimId": "650d9a44fc162caf182729f2", "year": "2020", "vin": "" }],
            [
                {
                    "makeId": "64e89b61dee8c01c4ccfab2f",
                    "modelId": "650d99affc162caf182306f5",
                    "trimId": "6560462a99bf70b7fc2fd466",
                    "year": "2020",
                    "vin": "WAUF1GFF4LA090700"
                }
            ]
        ]
    },
    {
        "firstName": "Gurkaran",
        "lastName": "Singh",
        "fullName": "Gurkaran Singh",
        "phoneNumber": "6478710002",
        "email": "gurkarandeol57@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2017", "vin": "WBA8A3C54HK691314" }]]
    },
    {
        "firstName": "Tejinder",
        "lastName": "Dulay",
        "fullName": "Tejinder Dulay",
        "phoneNumber": "6478082313",
        "email": "tonydulay@hotmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2011", "vin": "" }]]
    },
    {
        "firstName": "Tim",
        "lastName": "Antony",
        "fullName": "Tim Antony",
        "phoneNumber": "6478853265",
        "email": "racecar979@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2019", "vin": "WDDSJ4GB6KN713565" }]]
    },
    {
        "firstName": "Vikas",
        "lastName": "Narula",
        "fullName": "Vikas Narula",
        "phoneNumber": "6479922244",
        "email": "vnarula16@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89aacdee8c01c4ccfab17",
                    "modelId": "64e8aa89dee8c01c4ccfaccd",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2011",
                    "vin": "2HNYD2H72BH003575"
                }
            ],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2015", "vin": "WDCGG0EB5FG429536" }]
        ]
    },
    {
        "firstName": "Wajid",
        "lastName": "Siddiqui",
        "fullName": "Wajid Siddiqui",
        "phoneNumber": "6477710440",
        "email": "as_salik@hotmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89bbfdee8c01c4ccfab3b",
                    "modelId": "650d99b0fc162caf1823174d",
                    "trimId": "650d9a45fc162caf18272f24",
                    "year": "2016",
                    "vin": "5UXKR0C5XG0P22302"
                }
            ]
        ]
    },
    {
        "firstName": "Tristan ",
        "lastName": "Davis",
        "fullName": "Tristan Davis",
        "phoneNumber": "6478242734",
        "email": "snilr23@hotmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89aacdee8c01c4ccfab17",
                    "modelId": "650d99adfc162caf1822f853",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2020",
                    "vin": "19UUB1F63LA801034"
                }
            ]
        ]
    },
    {
        "firstName": "Vikram",
        "lastName": "Punia",
        "fullName": "Vikram Punia",
        "phoneNumber": "9059204475",
        "email": "VIRSATRANSPORT@GMAIL.COM",
        "company": "",
        "vehicles": [[{ "makeId": "64e89bbfdee8c01c4ccfab3b", "trimId": "655f29b299a1a96abeb5f71e", "year": "2013", "vin": "WBA3B3C59DF540284" }]]
    },
    {
        "firstName": "Vikramjeet",
        "lastName": "Singh",
        "fullName": "Vikramjeet Singh",
        "phoneNumber": "4372479287",
        "email": "vikramjeet4809@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89feedee8c01c4ccfabdd",
                    "modelId": "650d99cffc162caf18243cdb",
                    "trimId": "650d9a4bfc162caf182756cf",
                    "year": "2016",
                    "vin": "SALGS2EF8GA299428"
                }
            ]
        ]
    },
    {
        "firstName": "Zeeshan",
        "lastName": "Abbasi",
        "fullName": "Zeeshan Abbasi",
        "phoneNumber": "9055983739",
        "email": "abbasi.zeeshan@hotmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a041dee8c01c4ccfabe9",
                    "modelId": "650d99d0fc162caf182448e5",
                    "trimId": "655f29b299a1a96abeb5f71e",
                    "year": "2008",
                    "vin": "2LMDU88C38BJ39388"
                }
            ],
            [{ "makeId": "64e8a0fddee8c01c4ccfac13", "year": "2007", "vin": "" }]
        ]
    },
    {
        "firstName": "Dalbir",
        "lastName": "Pawar",
        "fullName": "Dalbir Pawar",
        "phoneNumber": "6473338790",
        "email": "dalbir.pawar@gmail.com",
        "company": "",
        "vehicles": [[{ "trimId": "6560462a99bf70b7fc2fd466", "year": "", "vin": "" }]]
    },
    {
        "firstName": "Maninder",
        "lastName": "Singh",
        "fullName": "Maninder Singh",
        "phoneNumber": "6475698466",
        "email": "",
        "company": "",
        "vehicles": [[{ "trimId": "6560462a99bf70b7fc2fd466", "year": "", "vin": "" }]]
    },
    {
        "firstName": "Sahil",
        "lastName": "Sharma",
        "fullName": "Sahil Sharma",
        "phoneNumber": "6473349840",
        "email": "lihas417@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e89ebbdee8c01c4ccfaba1",
                    "modelId": "650d99c7fc162caf1823f8a9",
                    "trimId": "650d9a49fc162caf18274a47",
                    "year": "2008",
                    "vin": "2HGFA16548H001449"
                }
            ]
        ]
    },
    {
        "firstName": "Tanya",
        "lastName": "Mehta",
        "fullName": "Tanya Mehta",
        "phoneNumber": "6478322741",
        "email": "tanyamehta8213@gmail.com",
        "company": "",
        "vehicles": [
            [
                {
                    "makeId": "64e8a5f2dee8c01c4ccfac9d",
                    "modelId": "650d99e7fc162caf1824fcc9",
                    "trimId": "650d9a55fc162caf18277af0",
                    "year": "2020",
                    "vin": "3VWCB7BU3LM069599"
                }
            ]
        ]
    },
    {
        "firstName": "Kuldeep ",
        "lastName": "Dhillon",
        "fullName": "Kuldeep Dhillon",
        "phoneNumber": "6479630052",
        "email": "kdhillon05t2cc@gmail.com",
        "company": "",
        "vehicles": [[{ "makeId": "64e89f6fdee8c01c4ccfabbf", "year": "2016", "vin": "SAJXJ2GD3G8W00735" }]]
    }
]



let ab = _.groupBy(a, "phoneNumber")
console.log("🚀 ~ ab:", a.length)
console.log(Object.keys(ab).length)