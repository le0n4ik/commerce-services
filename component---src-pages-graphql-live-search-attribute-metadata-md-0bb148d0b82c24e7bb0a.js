"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[7700],{27172:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return u},default:function(){return s}});var n=a(87462),r=a(45987),l=(a(35776),a(3905)),i=a(91515),d=a(48631);const m=["components"],u={},p={_frontmatter:u},o=i.Z;function s(e){let{components:t}=e,a=(0,r.Z)(e,m);return(0,l.mdx)(o,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"attributemetadata-query"},"attributeMetadata query"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"attributeMetadata")," query returns a list of product attribute codes that can be used for sorting or filtering in a ",(0,l.mdx)("a",{parentName:"p",href:"./product-search.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"productSearch")," query"),". The query response can include the attribute name, display label, and a Boolean value that indicates if the attribute has a numeric value."),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"attributeMetadata: AttributeMetadataResponse!")),(0,l.mdx)("h2",{id:"endpoint"},"Endpoint"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"https://catalog-service.adobe.io/graphql")),(0,l.mdx)("h2",{id:"required-headers"},"Required headers"),(0,l.mdx)("p",null,"You must specify the following HTTP headers to run this query."),(0,l.mdx)(d.Z,{mdxType:"Docs"}),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("p",null,"The following query returns details about all product attributes that can be used to define the sorting order or as a filter in a ",(0,l.mdx)("inlineCode",{parentName:"p"},"productSearch")," query."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  attributeMetadata{\n    sortable {\n      attribute\n      label\n      numeric\n    }\n    filterableInSearch  {\n      attribute\n      label\n      numeric\n    }\n  }\n}\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "extensions": {\n    "request-id": "5Kd6pzYc02PlHIbbmNDTff3VaXF0EnYf"\n  },\n  "data": {\n    "attributeMetadata": {\n      "sortable": [\n        {\n          "attribute": "name",\n          "label": "Product Name",\n          "numeric": false\n        },\n        {\n          "attribute": "price",\n          "label": "Price",\n          "numeric": true\n        },\n        {\n          "attribute": "position",\n          "label": "position",\n          "numeric": true\n        }\n      ],\n      "filterableInSearch": [\n        {\n          "attribute": "categoryIds",\n          "label": "categoryIds",\n          "numeric": false\n        },\n        {\n          "attribute": "collar",\n          "label": "Collar",\n          "numeric": false\n        },\n        {\n          "attribute": "visibility",\n          "label": "visibility",\n          "numeric": false\n        },\n        {\n          "attribute": "activity",\n          "label": "Activity",\n          "numeric": false\n        },\n        {\n          "attribute": "gender",\n          "label": "Gender",\n          "numeric": false\n        },\n        {\n          "attribute": "size",\n          "label": "Size",\n          "numeric": false\n        },\n        {\n          "attribute": "price",\n          "label": "price",\n          "numeric": true\n        },\n        {\n          "attribute": "sleeve",\n          "label": "Sleeve",\n          "numeric": false\n        },\n        {\n          "attribute": "eco_collection",\n          "label": "Eco Collection",\n          "numeric": false\n        },\n        {\n          "attribute": "categories",\n          "label": "categories",\n          "numeric": false\n        },\n        {\n          "attribute": "climate",\n          "label": "Climate",\n          "numeric": false\n        },\n        {\n          "attribute": "sku",\n          "label": "sku",\n          "numeric": false\n        }\n      ]\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"output-fields"},"Output fields"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"AttributeMetadataResponse")," return object can contain the following fields:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"filterableInSearch")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#filterableinsearchattribute-data-type"},"FilterableInSearchAttribute")),(0,l.mdx)("td",{parentName:"tr",align:null},"An array of product attributes that can be used for filtering in a ",(0,l.mdx)("inlineCode",{parentName:"td"},"productSearch")," query")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"sortable")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"#sortableattribute-data-type"},"SortableAttribute")),(0,l.mdx)("td",{parentName:"tr",align:null},"An array of product attributes that can be used for sorting in a ",(0,l.mdx)("inlineCode",{parentName:"td"},"productSearch")," query")))),(0,l.mdx)("h3",{id:"filterableinsearchattribute-data-type"},"FilterableInSearchAttribute data type"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"FilterableInSearchAttribute")," data type can contain the following fields:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"attribute")),(0,l.mdx)("td",{parentName:"tr",align:null},"String!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The unique identifier for an attribute code. This value should be in lowercase letters and without spaces")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"label")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"The display name assigned to the attribute")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"numeric")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Indicates whether this attribute has a numeric value, such as a price or integer")))),(0,l.mdx)("h3",{id:"sortableattribute-data-type"},"SortableAttribute data type"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"SortableAttribute")," data type can contain the following fields:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"attribute")),(0,l.mdx)("td",{parentName:"tr",align:null},"String!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The unique identifier for an attribute code. This value should be in lowercase letters and without spaces")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"label")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"The display name assigned to the attribute")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"numeric")),(0,l.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"Indicates whether this attribute has a numeric value, such as a price or integer")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-live-search-attribute-metadata-md-0bb148d0b82c24e7bb0a.js.map