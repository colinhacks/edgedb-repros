"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const { $ } = require("edgedb");
const _ = __importStar(require("../imports"));
const $Named = $.makeType(_.spec, "1cff5f6a-9f4b-11ec-99ef-793a8d237942", _.syntax.literal);
const Named = _.syntax.$PathNode($.$toSet($Named, $.Cardinality.Many), null, true);
const $Abbreviation = $.makeType(_.spec, "1d0142a8-9f4b-11ec-954d-abea019fd90f", _.syntax.literal);
const Abbreviation = _.syntax.$PathNode($.$toSet($Abbreviation, $.Cardinality.Many), null, true);
const $BlogPost = $.makeType(_.spec, "e1a91f0c-9bec-11ec-b039-99d54269a5d2", _.syntax.literal);
const BlogPost = _.syntax.$PathNode($.$toSet($BlogPost, $.Cardinality.Many), null, true);
const $Commentable = $.makeType(_.spec, "e2b56608-9bec-11ec-bb84-8fd23c82a66e", _.syntax.literal);
const Commentable = _.syntax.$PathNode($.$toSet($Commentable, $.Cardinality.Many), null, true);
const $BlogPost2 = $.makeType(_.spec, "e2b69b7c-9bec-11ec-bd17-4de6fa38ef1b", _.syntax.literal);
const BlogPost2 = _.syntax.$PathNode($.$toSet($BlogPost2, $.Cardinality.Many), null, true);
const $Comment = $.makeType(_.spec, "e2b7fb0c-9bec-11ec-9af4-b5a4398f7e41", _.syntax.literal);
const Comment = _.syntax.$PathNode($.$toSet($Comment, $.Cardinality.Many), null, true);
const $Content = $.makeType(_.spec, "735125f6-9e92-11ec-b48c-d30acb3727bd", _.syntax.literal);
const Content = _.syntax.$PathNode($.$toSet($Content, $.Cardinality.Many), null, true);
const $Crab = $.makeType(_.spec, "17e7791a-9bed-11ec-8e73-c70f24643c74", _.syntax.literal);
const Crab = _.syntax.$PathNode($.$toSet($Crab, $.Cardinality.Many), null, true);
const $Designation = $.makeType(_.spec, "1d0306c4-9f4b-11ec-99fc-b7daaf780cbc", _.syntax.literal);
const Designation = _.syntax.$PathNode($.$toSet($Designation, $.Cardinality.Many), null, true);
const $File = $.makeType(_.spec, "e3b45f14-9bec-11ec-ab78-3989951ab517", _.syntax.literal);
const File = _.syntax.$PathNode($.$toSet($File, $.Cardinality.Many), null, true);
const $Labor_union = $.makeType(_.spec, "1d06a32e-9f4b-11ec-9975-198851f5b0b6", _.syntax.literal);
const Labor_union = _.syntax.$PathNode($.$toSet($Labor_union, $.Cardinality.Many), null, true);
const $Movie = $.makeType(_.spec, "e35667ba-9bec-11ec-99b5-ebfa7ebe6904", _.syntax.literal);
const Movie = _.syntax.$PathNode($.$toSet($Movie, $.Cardinality.Many), null, true);
const $Tag = $.makeType(_.spec, "17e8d8dc-9bed-11ec-ad25-37a1eabe5093", _.syntax.literal);
const Tag = _.syntax.$PathNode($.$toSet($Tag, $.Cardinality.Many), null, true);
const $Union_labor_name = $.makeType(_.spec, "1d04d242-9f4b-11ec-b0ac-4b86ce809892", _.syntax.literal);
const Union_labor_name = _.syntax.$PathNode($.$toSet($Union_labor_name, $.Cardinality.Many), null, true);
const $User = $.makeType(_.spec, "e4645fa4-9bec-11ec-bb7f-874f6a40c522", _.syntax.literal);
const User = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null, true);
Object.assign(exports, { $Named: $Named, Named: Named, $Abbreviation: $Abbreviation, Abbreviation: Abbreviation, $BlogPost: $BlogPost, BlogPost: BlogPost, $Commentable: $Commentable, Commentable: Commentable, $BlogPost2: $BlogPost2, BlogPost2: BlogPost2, $Comment: $Comment, Comment: Comment, $Content: $Content, Content: Content, $Crab: $Crab, Crab: Crab, $Designation: $Designation, Designation: Designation, $File: $File, File: File, $Labor_union: $Labor_union, Labor_union: Labor_union, $Movie: $Movie, Movie: Movie, $Tag: $Tag, Tag: Tag, $Union_labor_name: $Union_labor_name, Union_labor_name: Union_labor_name, $User: $User, User: User });
const __defaultExports = {
    "Named": Named,
    "Abbreviation": Abbreviation,
    "BlogPost": BlogPost,
    "Commentable": Commentable,
    "BlogPost2": BlogPost2,
    "Comment": Comment,
    "Content": Content,
    "Crab": Crab,
    "Designation": Designation,
    "File": File,
    "Labor_union": Labor_union,
    "Movie": Movie,
    "Tag": Tag,
    "Union_labor_name": Union_labor_name,
    "User": User
};
exports.default = __defaultExports;
