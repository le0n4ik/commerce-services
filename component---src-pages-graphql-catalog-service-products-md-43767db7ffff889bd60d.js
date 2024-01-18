"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[3210],{90549:function(n,e,l){l.r(e),l.d(e,{_frontmatter:function(){return u},default:function(){return b}});var a=l(87462),r=l(45987),t=(l(35776),l(3905)),i=l(91515),o=l(75030),s=l(2465);const d=["components"],u={},m=(p="InlineAlert",function(n){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",n)});var p;const c={_frontmatter:u},h=i.Z;function b(n){let{components:e}=n,l=(0,r.Z)(n,d);return(0,t.mdx)(h,(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"products-query"},"products query"),(0,t.mdx)("p",null,"The Catalog Service for Adobe Commerce ",(0,t.mdx)("inlineCode",{parentName:"p"},"products")," query returns details about the SKUs specified as input. Although this query has the same name as the ",(0,t.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/products/queries/products/"},(0,t.mdx)("inlineCode",{parentName:"a"},"products")," query")," that is provided with core Adobe Commerce and Magento Open Source, there are some differences."),(0,t.mdx)("p",null,"The Catalog Service query requires one or more SKU values as input. The query is primarily designed to retrieve information to render the following types of content:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Product detail pages - You can provide full details about the product identified by the specified SKU.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Product compare pages - You can retrieve selected information about multiple products, such as the name, price and image."))),(0,t.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,t.mdx)("p",null,"Use the Live Search ",(0,t.mdx)("a",{parentName:"p",href:"../live-search/product-search.md"},(0,t.mdx)("inlineCode",{parentName:"a"},"productSearch")," query")," to return product listing page content."),(0,t.mdx)("p",null,"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"ProductView")," output object is significantly different than the core ",(0,t.mdx)("inlineCode",{parentName:"p"},"products")," query ",(0,t.mdx)("inlineCode",{parentName:"p"},"Products")," output object. Key differences include:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Products are either simple or complex. Simple, virtual, downloadable, and gift card products map to ",(0,t.mdx)("inlineCode",{parentName:"p"},"SimpleProductView"),". All other product types map to ",(0,t.mdx)("inlineCode",{parentName:"p"},"ComplexProductView"),". Simple products have defined prices. Complex products have price ranges. Since complex products are comprised of multiple simple products, they have access to simple product prices.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Merchant-defined attributes are exposed in a top-level container and indicate their storefront roles. Roles include Show on PDP, Show on PLP, and Show on Search Results.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Images are also accessible as a top-level container and can be filtered by their role. An image can have an ",(0,t.mdx)("inlineCode",{parentName:"p"},"image"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"small_image"),", or ",(0,t.mdx)("inlineCode",{parentName:"p"},"thumbnail")," role."))),(0,t.mdx)("h2",{id:"syntax"},"Syntax"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-graphql"},"products (skus [String]) [ProductView]\n")),(0,t.mdx)("h2",{id:"endpoint"},"Endpoint"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"https://catalog-service.adobe.io/graphql")),(0,t.mdx)("h2",{id:"required-headers"},"Required headers"),(0,t.mdx)("p",null,"You must specify the following HTTP headers to run this query."),(0,t.mdx)(o.Z,{mdxType:"Docs"}),(0,t.mdx)("h2",{id:"example-usage"},"Example usage"),(0,t.mdx)("h3",{id:"return-details-about-a-simple-product"},"Return details about a simple product"),(0,t.mdx)("p",null,"The following query returns details about a simple product."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Request:")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n\n    products(skus: ["24-UG07"]) {\n        __typename\n        id\n        sku\n        name\n        description\n        shortDescription\n        addToCartAllowed\n        url\n        images(roles: []) {\n            url\n            label\n            roles\n        }\n        attributes(roles: []) {\n            name\n            label\n            value\n            roles\n        }\n        ... on SimpleProductView {\n            price {\n                final {\n                    amount {\n                        value\n                        currency\n                    }\n                }\n                regular {\n                    amount {\n                        value\n                        currency\n                    }\n                }\n                roles\n            }\n        }\n        links {\n            product {\n                sku\n\n            }\n            linkTypes\n        }\n    }\n}\n')),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Response:")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "products": [\n            {\n                "__typename": "SimpleProductView",\n                "id": "TWpRdFZVY3dOdwBaR1ZtWVhWc2RBAFlqVTFPRFEyTVdRdE4yWXhaaTAwTWpOaExXRTRabVV0TVRnd1pXRTVOV0V3TWpGaQBiV0ZwYmw5M1pXSnphWFJsWDNOMGIzSmwAWW1GelpRAFRVRkhVMVJITURBMU5UZ3dNakF3",\n                "sku": "24-UG07",\n                "name": "Dual Handle Cardio Ball",\n                "description": "<p>Make the most of your limited workout window with our Dual-Handle Cardio Ball. The 15-lb ball maximizes the effort-impact to your abdominal, upper arm and lower-body muscles. It features a handle on each side for a firm, secure grip.</p>\\r\\n<ul>\\r\\n<li>Durable plastic shell with sand fill.\\r\\n<li>Two handles.\\r\\n<li>15 lbs.\\r\\n</ul>",\n                "shortDescription": "",\n                "addToCartAllowed": true,\n                "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/dual-handle-cardio-ball.html",\n                "images": [\n                    {\n                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/u/g/ug07-bk-0.jpg",\n                        "label": "Image",\n                        "roles": [\n                            "image",\n                            "small_image",\n                            "thumbnail"\n                        ]\n                    },\n                    {\n                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/u/g/ug07-bk-0_alt1.jpg",\n                        "label": "Image",\n                        "roles": []\n                    }\n                ],\n                "attributes": [\n                    {\n                        "name": "activity",\n                        "label": "Activity",\n                        "value": [\n                            "Athletic",\n                            "Sports",\n                            "Gym"\n                        ],\n                        "roles": [\n                            "visible_in_pdp",\n                            "visible_in_compare_list",\n                            "visible_in_search"\n                        ]\n                    },\n                    {\n                        "name": "category_gear",\n                        "label": "Category",\n                        "value": [\n                            "Cardio",\n                            "Exercise"\n                        ],\n                        "roles": [\n                            "visible_in_pdp",\n                            "visible_in_search"\n                        ]\n                    },\n                    {\n                        "name": "color",\n                        "label": "Color",\n                        "value": "Black",\n                        "roles": [\n                            "visible_in_pdp",\n                            "visible_in_plp"\n                        ]\n                    },\n                    {\n                        "name": "eco_collection",\n                        "label": "Eco Collection",\n                        "value": "no",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    },\n                    {\n                        "name": "erin_recommends",\n                        "label": "Erin Recommends",\n                        "value": "yes",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    },\n                    {\n                        "name": "gender",\n                        "label": "Gender",\n                        "value": [\n                            "Men",\n                            "Women",\n                            "Unisex"\n                        ],\n                        "roles": [\n                            "visible_in_pdp",\n                            "visible_in_search"\n                        ]\n                    },\n                    {\n                        "name": "material",\n                        "label": "Material",\n                        "value": "Plastic",\n                        "roles": [\n                            "visible_in_pdp",\n                            "visible_in_search"\n                        ]\n                    },\n                    {\n                        "name": "new",\n                        "label": "New",\n                        "value": "no",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    },\n                    {\n                        "name": "performance_fabric",\n                        "label": "Performance Fabric",\n                        "value": "no",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    },\n                    {\n                        "name": "sale",\n                        "label": "Sale",\n                        "value": "yes",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    }\n                ],\n                "price": {\n                    "final": {\n                        "amount": {\n                            "value": 12,\n                            "currency": "USD"\n                        }\n                    },\n                    "regular": {\n                        "amount": {\n                            "value": 12,\n                            "currency": "USD"\n                        }\n                    },\n                    "roles": [\n                        "visible"\n                    ]\n                },\n                "links": [\n                    {\n                        "product": {\n                            "sku": "24-UG06"\n                        },\n                        "linkTypes": [\n                            "related"\n                        ]\n                    },\n                    {\n                        "product": {\n                            "sku": "MH07"\n                        },\n                        "linkTypes": [\n                            "related"\n                        ]\n                    },\n                    {\n                        "product": {\n                            "sku": "24-WG088"\n                        },\n                        "linkTypes": [\n                            "crosssell"\n                        ]\n                    },\n                    {\n                        "product": {\n                            "sku": "24-WG085_Group"\n                        },\n                        "linkTypes": [\n                            "related"\n                        ]\n                    },\n                    {\n                        "product": {\n                            "sku": "24-UG02"\n                        },\n                        "linkTypes": [\n                            "related"\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,t.mdx)("h3",{id:"return-details-about-a-complex-product"},"Return details about a complex product"),(0,t.mdx)("p",null,"The following query returns details about a complex product."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Request:")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n\n    products(skus: ["MH07"]) {\n        __typename\n        id\n        sk\n        name\n        description\n        shortDescription\n        addToCartAllowed\n        url\n        images(roles: []) {\n            url\n            label\n            roles\n        }\n        attributes(roles: []) {\n            name\n            label\n            value\n            roles\n        }\n        ... on ComplexProductView {\n            options {\n                id\n                title\n                required\n                values {\n                    id\n                    title\n                    ... on ProductViewOptionValueProduct {\n                        title,\n                        quantity,\n                        isDefault,\n                        product {\n                            sku\n                            shortDescription\n                            name\n                            links {\n                                product {\n                                    sku\n                                }\n                                linkTypes\n                            }\n                            price {\n                                final {\n                                    amount {\n                                        value\n                                        currency\n                                    }\n                                }\n                                regular {\n                                    amount {\n                                        value\n                                        currency\n                                    }\n                                }\n                                roles\n                            }\n                        }\n                    }                    \n                }\n            }\n            priceRange {\n                maximum {\n                    final {\n                        amount {\n                            value\n                            currency\n                        }\n                    }\n                    regular {\n                        amount {\n                            value\n                            currency\n                        }\n                    }\n                    roles\n                }\n                minimum {\n                    final {\n                        amount {\n                            value\n                            currency\n                        }\n                    }\n                    regular {\n                        amount {\n                            value\n                            currency\n                        }\n                    }\n                    roles\n                }\n            }\n        }\n    }\n}\n')),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Response:")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "products": [\n            {\n                "__typename": "ComplexProductView",\n                "id": "VFVnd053AFpHVm1ZWFZzZEEAWWpVMU9EUTJNV1F0TjJZeFppMDBNak5oTFdFNFptVXRNVGd3WldFNU5XRXdNakZpAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRnd01qQXc",\n                "sku": "MH07",\n                "name": "Hero Hoodie",\n                "description": "<p>Gray and black color blocking sets you apart as the Hero Hoodie keeps you warm on the bus, campus or cold mean streets. Slanted outsize front pockets keep your style real . . . convenient.</p>\\r\\n<p>&bull; Full-zip gray and black hoodie.<br />&bull; Ribbed hem.<br />&bull; Standard fit.<br />&bull; Drawcord hood cinch.<br />&bull; Water-resistant coating.</p>",\n                "shortDescription": "",\n                "addToCartAllowed": true,\n                "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/hero-hoodie.html",\n                "images": [\n                    {\n                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/m/h/mh07-gray_main_2.jpg",\n                        "label": "",\n                        "roles": [\n                            "image",\n                            "small_image",\n                            "thumbnail"\n                        ]\n                    },\n                    {\n                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/m/h/mh07-gray_alt1_2.jpg",\n                        "label": "",\n                        "roles": []\n                    },\n                    {\n                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/m/h/mh07-gray_back_2.jpg",\n                        "label": "",\n                        "roles": []\n                    }\n                ],\n                "attributes": [\n                    {\n                        "name": "climate",\n                        "label": "Climate",\n                        "value": "Spring",\n                        "roles": [\n                            "visible_in_pdp",\n                            "visible_in_search"\n                        ]\n                    },\n                    {\n                        "name": "eco_collection",\n                        "label": "Eco Collection",\n                        "value": "no",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    },\n                    {\n                        "name": "erin_recommends",\n                        "label": "Erin Recommends",\n                        "value": "no",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    },\n                    {\n                        "name": "material",\n                        "label": "Material",\n                        "value": [\n                            "Fleece",\n                            "Hemp",\n                            "Polyester"\n                        ],\n                        "roles": [\n                            "visible_in_pdp",\n                            "visible_in_search"\n                        ]\n                    },\n                    {\n                        "name": "new",\n                        "label": "New",\n                        "value": "yes",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    },\n                    {\n                        "name": "pattern",\n                        "label": "Pattern",\n                        "value": "Color-Blocked",\n                        "roles": [\n                            "visible_in_pdp",\n                            "visible_in_search"\n                        ]\n                    },\n                    {\n                        "name": "performance_fabric",\n                        "label": "Performance Fabric",\n                        "value": "no",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    },\n                    {\n                        "name": "sale",\n                        "label": "Sale",\n                        "value": "no",\n                        "roles": [\n                            "visible_in_pdp"\n                        ]\n                    }\n                ],\n                "links": [\n                    {\n                        "product": {\n                            "sku": "24-UG07"\n                        },\n                        "linkTypes": [\n                            "crosssell"\n                        ]\n                    },\n                    {\n                        "product": {\n                            "sku": "24-UG06"\n                        },\n                        "linkTypes": [\n                            "related",\n                            "crosssell"\n                        ]\n                    },\n                    {\n                        "product": {\n                            "sku": "24-WG088"\n                        },\n                        "linkTypes": [\n                            "crosssell"\n                        ]\n                    },\n                    {\n                        "product": {\n                            "sku": "24-WG080"\n                        },\n                        "linkTypes": [\n                            "crosssell"\n                        ]\n                    }\n                ],\n                "options": [\n                    {\n                        "id": "size",\n                        "title": "Size",\n                        "required": false,\n                        "values": [\n                            {\n                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNjY=",\n                                "title": "XS"\n                            },\n                            {\n                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNjc=",\n                                "title": "S"\n                            },\n                            {\n                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNjg=",\n                                "title": "M"\n                            },\n                            {\n                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNjk=",\n                                "title": "L"\n                            },\n                            {\n                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNzA=",\n                                "title": "XL"\n                            }\n                        ]\n                    },\n                    {\n                        "id": "color",\n                        "title": "Color",\n                        "required": false,\n                        "values": [\n                            {\n                                "id": "Y29uZmlndXJhYmxlLzkzLzQ5",\n                                "title": "Black"\n                            },\n                            {\n                                "id": "Y29uZmlndXJhYmxlLzkzLzUy",\n                                "title": "Gray"\n                            },\n                            {\n                                "id": "Y29uZmlndXJhYmxlLzkzLzUz",\n                                "title": "Green"\n                            }\n                        ]\n                    }\n                ],\n                "priceRange": {\n                    "maximum": {\n                        "final": {\n                            "amount": {\n                                "value": 54,\n                                "currency": "USD"\n                            }\n                        },\n                        "regular": {\n                            "amount": {\n                                "value": 54,\n                                "currency": "USD"\n                            }\n                        },\n                        "roles": [\n                            "visible"\n                        ]\n                    },\n                    "minimum": {\n                        "final": {\n                            "amount": {\n                                "value": 54,\n                                "currency": "USD"\n                            }\n                        },\n                        "regular": {\n                            "amount": {\n                                "value": 54,\n                                "currency": "USD"\n                            }\n                        },\n                        "roles": [\n                            "visible"\n                        ]\n                    }\n                }\n            }\n        ]\n    }\n}\n')),(0,t.mdx)("h2",{id:"output-fields"},"Output fields"),(0,t.mdx)(s.Z,{mdxType:"Docs2"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-catalog-service-products-md-43767db7ffff889bd60d.js.map