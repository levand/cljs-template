goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____1993 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____1993))
{return or__3576__auto____1993;
} else
{var or__3576__auto____1994 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____1994))
{return or__3576__auto____1994;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1995 = coll;

if(cljs.core.truth_(and__3574__auto____1995))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____1995;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____1996 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1996))
{return or__3576__auto____1996;
} else
{var or__3576__auto____1997 = (_count["_"]);

if(cljs.core.truth_(or__3576__auto____1997))
{return or__3576__auto____1997;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1998 = coll;

if(cljs.core.truth_(and__3574__auto____1998))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____1998;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____1999 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1999))
{return or__3576__auto____1999;
} else
{var or__3576__auto____2000 = (_empty["_"]);

if(cljs.core.truth_(or__3576__auto____2000))
{return or__3576__auto____2000;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2001 = coll;

if(cljs.core.truth_(and__3574__auto____2001))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2001;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2002 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2002))
{return or__3576__auto____2002;
} else
{var or__3576__auto____2003 = (_conj["_"]);

if(cljs.core.truth_(or__3576__auto____2003))
{return or__3576__auto____2003;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2010 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2004 = coll;

if(cljs.core.truth_(and__3574__auto____2004))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2004;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2005 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2005))
{return or__3576__auto____2005;
} else
{var or__3576__auto____2006 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2006))
{return or__3576__auto____2006;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2011 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2007 = coll;

if(cljs.core.truth_(and__3574__auto____2007))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2007;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2008 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2008))
{return or__3576__auto____2008;
} else
{var or__3576__auto____2009 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2009))
{return or__3576__auto____2009;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2010.call(this,coll,n);
case  3 :
return _nth__2011.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2013 = coll;

if(cljs.core.truth_(and__3574__auto____2013))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2013;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2014 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2014))
{return or__3576__auto____2014;
} else
{var or__3576__auto____2015 = (_first["_"]);

if(cljs.core.truth_(or__3576__auto____2015))
{return or__3576__auto____2015;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2016 = coll;

if(cljs.core.truth_(and__3574__auto____2016))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2016;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2017 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2017))
{return or__3576__auto____2017;
} else
{var or__3576__auto____2018 = (_rest["_"]);

if(cljs.core.truth_(or__3576__auto____2018))
{return or__3576__auto____2018;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2025 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2019 = o;

if(cljs.core.truth_(and__3574__auto____2019))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2019;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2020 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2020))
{return or__3576__auto____2020;
} else
{var or__3576__auto____2021 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2021))
{return or__3576__auto____2021;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2026 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2022 = o;

if(cljs.core.truth_(and__3574__auto____2022))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2022;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2023 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2023))
{return or__3576__auto____2023;
} else
{var or__3576__auto____2024 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2024))
{return or__3576__auto____2024;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2025.call(this,o,k);
case  3 :
return _lookup__2026.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2028 = coll;

if(cljs.core.truth_(and__3574__auto____2028))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2028;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2029 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2029))
{return or__3576__auto____2029;
} else
{var or__3576__auto____2030 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2030))
{return or__3576__auto____2030;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2031 = coll;

if(cljs.core.truth_(and__3574__auto____2031))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2031;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2032 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2032))
{return or__3576__auto____2032;
} else
{var or__3576__auto____2033 = (_assoc["_"]);

if(cljs.core.truth_(or__3576__auto____2033))
{return or__3576__auto____2033;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2034 = coll;

if(cljs.core.truth_(and__3574__auto____2034))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2034;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2035 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2035))
{return or__3576__auto____2035;
} else
{var or__3576__auto____2036 = (_dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____2036))
{return or__3576__auto____2036;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2037 = coll;

if(cljs.core.truth_(and__3574__auto____2037))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2037;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2038 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2038))
{return or__3576__auto____2038;
} else
{var or__3576__auto____2039 = (_disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____2039))
{return or__3576__auto____2039;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2040 = coll;

if(cljs.core.truth_(and__3574__auto____2040))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2040;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2041 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2041))
{return or__3576__auto____2041;
} else
{var or__3576__auto____2042 = (_peek["_"]);

if(cljs.core.truth_(or__3576__auto____2042))
{return or__3576__auto____2042;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2043 = coll;

if(cljs.core.truth_(and__3574__auto____2043))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2043;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2044 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2044))
{return or__3576__auto____2044;
} else
{var or__3576__auto____2045 = (_pop["_"]);

if(cljs.core.truth_(or__3576__auto____2045))
{return or__3576__auto____2045;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2046 = coll;

if(cljs.core.truth_(and__3574__auto____2046))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2046;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2047 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2047))
{return or__3576__auto____2047;
} else
{var or__3576__auto____2048 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____2048))
{return or__3576__auto____2048;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2049 = o;

if(cljs.core.truth_(and__3574__auto____2049))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2049;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2050 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2050))
{return or__3576__auto____2050;
} else
{var or__3576__auto____2051 = (_deref["_"]);

if(cljs.core.truth_(or__3576__auto____2051))
{return or__3576__auto____2051;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2052 = o;

if(cljs.core.truth_(and__3574__auto____2052))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2052;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2053 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2053))
{return or__3576__auto____2053;
} else
{var or__3576__auto____2054 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____2054))
{return or__3576__auto____2054;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2055 = o;

if(cljs.core.truth_(and__3574__auto____2055))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2055;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2056 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2056))
{return or__3576__auto____2056;
} else
{var or__3576__auto____2057 = (_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2057))
{return or__3576__auto____2057;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2058 = o;

if(cljs.core.truth_(and__3574__auto____2058))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2058;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2059 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2059))
{return or__3576__auto____2059;
} else
{var or__3576__auto____2060 = (_with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2060))
{return or__3576__auto____2060;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2067 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2061 = coll;

if(cljs.core.truth_(and__3574__auto____2061))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2061;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2062 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2062))
{return or__3576__auto____2062;
} else
{var or__3576__auto____2063 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2063))
{return or__3576__auto____2063;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2068 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2064 = coll;

if(cljs.core.truth_(and__3574__auto____2064))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2064;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2065 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2065))
{return or__3576__auto____2065;
} else
{var or__3576__auto____2066 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2066))
{return or__3576__auto____2066;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2067.call(this,coll,f);
case  3 :
return _reduce__2068.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2070 = o;

if(cljs.core.truth_(and__3574__auto____2070))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2070;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2071 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2071))
{return or__3576__auto____2071;
} else
{var or__3576__auto____2072 = (_equiv["_"]);

if(cljs.core.truth_(or__3576__auto____2072))
{return or__3576__auto____2072;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2073 = o;

if(cljs.core.truth_(and__3574__auto____2073))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2073;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2074 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2074))
{return or__3576__auto____2074;
} else
{var or__3576__auto____2075 = (_hash["_"]);

if(cljs.core.truth_(or__3576__auto____2075))
{return or__3576__auto____2075;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2076 = o;

if(cljs.core.truth_(and__3574__auto____2076))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2076;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2077 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2077))
{return or__3576__auto____2077;
} else
{var or__3576__auto____2078 = (_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2078))
{return or__3576__auto____2078;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2079 = o;

if(cljs.core.truth_(and__3574__auto____2079))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2079;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2080 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2080))
{return or__3576__auto____2080;
} else
{var or__3576__auto____2081 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2081))
{return or__3576__auto____2081;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2082 = d;

if(cljs.core.truth_(and__3574__auto____2082))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2082;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2083 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2083))
{return or__3576__auto____2083;
} else
{var or__3576__auto____2084 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2084))
{return or__3576__auto____2084;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2085 = null;
var G__2085__2086 = (function (_,n){
return null;
});
var G__2085__2087 = (function (_,n,not_found){
return not_found;
});
G__2085 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2085__2086.call(this,_,n);
case  3 :
return G__2085__2087.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2085;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2089 = null;
var G__2089__2090 = (function (_,f){
return f.call(null);
});
var G__2089__2091 = (function (_,f,start){
return start;
});
G__2089 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2089__2090.call(this,_,f);
case  3 :
return G__2089__2091.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2089;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2093 = null;
var G__2093__2094 = (function (o,k){
return null;
});
var G__2093__2095 = (function (o,k,not_found){
return not_found;
});
G__2093 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2093__2094.call(this,o,k);
case  3 :
return G__2093__2095.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2093;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2103 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2097 = cljs.core._nth.call(null,cicoll,0);
var n__2098 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2098,cljs.core._count.call(null,cicoll))))
{{
var G__2107 = f.call(null,val__2097,cljs.core._nth.call(null,cicoll,n__2098));
var G__2108 = cljs.core.inc.call(null,n__2098);
val__2097 = G__2107;
n__2098 = G__2108;
continue;
}
} else
{return val__2097;
}
break;
}
}
});
var ci_reduce__2104 = (function (cicoll,f,val){
var val__2099 = val;
var n__2100 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2100,cljs.core._count.call(null,cicoll))))
{{
var G__2109 = f.call(null,val__2099,cljs.core._nth.call(null,cicoll,n__2100));
var G__2110 = cljs.core.inc.call(null,n__2100);
val__2099 = G__2109;
n__2100 = G__2110;
continue;
}
} else
{return val__2099;
}
break;
}
});
var ci_reduce__2105 = (function (cicoll,f,val,idx){
var val__2101 = val;
var n__2102 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2102,cljs.core._count.call(null,cicoll))))
{{
var G__2111 = f.call(null,val__2101,cljs.core._nth.call(null,cicoll,n__2102));
var G__2112 = cljs.core.inc.call(null,n__2102);
val__2101 = G__2111;
n__2102 = G__2112;
continue;
}
} else
{return val__2101;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2103.call(this,cicoll,f);
case  3 :
return ci_reduce__2104.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2105.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2120 = null;
var G__2120__2121 = (function (coll,f){
var this__2113 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2113.a[this__2113.i]),cljs.core.inc.call(null,this__2113.i));
});
var G__2120__2122 = (function (coll,f,start){
var this__2114 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2114.i);
});
G__2120 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2120__2121.call(this,coll,f);
case  3 :
return G__2120__2122.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2120;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2115 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2116 = this;
return this__2116.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2117 = this;
return (this__2117.a[this__2117.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2118 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2118.i),this__2118.a.length)))
{return (new cljs.core.IndexedSeq(this__2118.a,cljs.core.inc.call(null,this__2118.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2119 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2124 = null;
var G__2124__2125 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2124__2126 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2124 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2124__2125.call(this,array,f);
case  3 :
return G__2124__2126.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2124;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2128 = null;
var G__2128__2129 = (function (array,k){
return (array[k]);
});
var G__2128__2130 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2128 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2128__2129.call(this,array,k);
case  3 :
return G__2128__2130.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2128;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2132 = null;
var G__2132__2133 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2132__2134 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2132 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2132__2133.call(this,array,n);
case  3 :
return G__2132__2134.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2132;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2136 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2136))
{var s__2137 = temp__3726__auto____2136;

return cljs.core._first.call(null,s__2137);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2138 = cljs.core.next.call(null,s);
s = G__2138;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2139 = cljs.core.seq.call(null,x);
var n__2140 = 0;

while(true){
if(cljs.core.truth_(s__2139))
{{
var G__2141 = cljs.core.next.call(null,s__2139);
var G__2142 = cljs.core.inc.call(null,n__2140);
s__2139 = G__2141;
n__2140 = G__2142;
continue;
}
} else
{return n__2140;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2143 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2144 = (function() { 
var G__2146__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2147 = conj.call(null,coll,x);
var G__2148 = cljs.core.first.call(null,xs);
var G__2149 = cljs.core.next.call(null,xs);
coll = G__2147;
x = G__2148;
xs = G__2149;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2146 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2146__delegate.call(this, coll, x, xs);
};
G__2146.cljs$lang$maxFixedArity = 2;
G__2146.cljs$lang$applyTo = (function (arglist__2150){
var coll = cljs.core.first(arglist__2150);
var x = cljs.core.first(cljs.core.next(arglist__2150));
var xs = cljs.core.rest(cljs.core.next(arglist__2150));
return G__2146__delegate.call(this, coll, x, xs);
});
return G__2146;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2143.call(this,coll,x);
default:
return conj__2144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2144.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2151 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2152 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2151.call(this,coll,n);
case  3 :
return nth__2152.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2154 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2155 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2154.call(this,o,k);
case  3 :
return get__2155.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2158 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2159 = (function() { 
var G__2161__delegate = function (coll,k,v,kvs){
while(true){
var ret__2157 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2162 = ret__2157;
var G__2163 = cljs.core.first.call(null,kvs);
var G__2164 = cljs.core.second.call(null,kvs);
var G__2165 = cljs.core.nnext.call(null,kvs);
coll = G__2162;
k = G__2163;
v = G__2164;
kvs = G__2165;
continue;
}
} else
{return ret__2157;
}
break;
}
};
var G__2161 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2161__delegate.call(this, coll, k, v, kvs);
};
G__2161.cljs$lang$maxFixedArity = 3;
G__2161.cljs$lang$applyTo = (function (arglist__2166){
var coll = cljs.core.first(arglist__2166);
var k = cljs.core.first(cljs.core.next(arglist__2166));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2166)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2166)));
return G__2161__delegate.call(this, coll, k, v, kvs);
});
return G__2161;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2158.call(this,coll,k,v);
default:
return assoc__2159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2159.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2168 = (function (coll){
return coll;
});
var dissoc__2169 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2170 = (function() { 
var G__2172__delegate = function (coll,k,ks){
while(true){
var ret__2167 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2173 = ret__2167;
var G__2174 = cljs.core.first.call(null,ks);
var G__2175 = cljs.core.next.call(null,ks);
coll = G__2173;
k = G__2174;
ks = G__2175;
continue;
}
} else
{return ret__2167;
}
break;
}
};
var G__2172 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2172__delegate.call(this, coll, k, ks);
};
G__2172.cljs$lang$maxFixedArity = 2;
G__2172.cljs$lang$applyTo = (function (arglist__2176){
var coll = cljs.core.first(arglist__2176);
var k = cljs.core.first(cljs.core.next(arglist__2176));
var ks = cljs.core.rest(cljs.core.next(arglist__2176));
return G__2172__delegate.call(this, coll, k, ks);
});
return G__2172;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2168.call(this,coll);
case  2 :
return dissoc__2169.call(this,coll,k);
default:
return dissoc__2170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2170.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__105__auto____2177 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2178 = x__105__auto____2177;

if(cljs.core.truth_(and__3574__auto____2178))
{return x__105__auto____2177.cljs$core$IMeta$;
} else
{return and__3574__auto____2178;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____2177);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2180 = (function (coll){
return coll;
});
var disj__2181 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2182 = (function() { 
var G__2184__delegate = function (coll,k,ks){
while(true){
var ret__2179 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2185 = ret__2179;
var G__2186 = cljs.core.first.call(null,ks);
var G__2187 = cljs.core.next.call(null,ks);
coll = G__2185;
k = G__2186;
ks = G__2187;
continue;
}
} else
{return ret__2179;
}
break;
}
};
var G__2184 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2184__delegate.call(this, coll, k, ks);
};
G__2184.cljs$lang$maxFixedArity = 2;
G__2184.cljs$lang$applyTo = (function (arglist__2188){
var coll = cljs.core.first(arglist__2188);
var k = cljs.core.first(cljs.core.next(arglist__2188));
var ks = cljs.core.rest(cljs.core.next(arglist__2188));
return G__2184__delegate.call(this, coll, k, ks);
});
return G__2184;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2180.call(this,coll);
case  2 :
return disj__2181.call(this,coll,k);
default:
return disj__2182.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2182.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2189 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2190 = x__105__auto____2189;

if(cljs.core.truth_(and__3574__auto____2190))
{return x__105__auto____2189.cljs$core$ICollection$;
} else
{return and__3574__auto____2190;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2189);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2191 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2192 = x__105__auto____2191;

if(cljs.core.truth_(and__3574__auto____2192))
{return x__105__auto____2191.cljs$core$ISet$;
} else
{return and__3574__auto____2192;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2191);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2193 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2194 = x__105__auto____2193;

if(cljs.core.truth_(and__3574__auto____2194))
{return x__105__auto____2193.cljs$core$IAssociative$;
} else
{return and__3574__auto____2194;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2193);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2195 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2196 = x__105__auto____2195;

if(cljs.core.truth_(and__3574__auto____2196))
{return x__105__auto____2195.cljs$core$ISequential$;
} else
{return and__3574__auto____2196;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2195);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2197 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2198 = x__105__auto____2197;

if(cljs.core.truth_(and__3574__auto____2198))
{return x__105__auto____2197.cljs$core$ICounted$;
} else
{return and__3574__auto____2198;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2197);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2199 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2200 = x__105__auto____2199;

if(cljs.core.truth_(and__3574__auto____2200))
{return x__105__auto____2199.cljs$core$IMap$;
} else
{return and__3574__auto____2200;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2199);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2201 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2202 = x__105__auto____2201;

if(cljs.core.truth_(and__3574__auto____2202))
{return x__105__auto____2201.cljs$core$IVector$;
} else
{return and__3574__auto____2202;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2201);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2203 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2203.push(key);
}));
return keys__2203;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__105__auto____2204 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2205 = x__105__auto____2204;

if(cljs.core.truth_(and__3574__auto____2205))
{return x__105__auto____2204.cljs$core$ISeq$;
} else
{return and__3574__auto____2205;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2204);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2206 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2206))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2207 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2207))
{return or__3576__auto____2207;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2206;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2208 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2208))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2208;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2209 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2209))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2209;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2210 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2210))
{return (n == n.toFixed());
} else
{return and__3574__auto____2210;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2211 = coll;

if(cljs.core.truth_(and__3574__auto____2211))
{var and__3574__auto____2212 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2212))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2212;
}
} else
{return and__3574__auto____2211;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2217 = (function (x){
return true;
});
var distinct_QMARK___2218 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2219 = (function() { 
var G__2221__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2213 = cljs.core.set([y,x]);
var xs__2214 = more;

while(true){
var x__2215 = cljs.core.first.call(null,xs__2214);
var etc__2216 = cljs.core.next.call(null,xs__2214);

if(cljs.core.truth_(xs__2214))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2213,x__2215)))
{return false;
} else
{{
var G__2222 = cljs.core.conj.call(null,s__2213,x__2215);
var G__2223 = etc__2216;
s__2213 = G__2222;
xs__2214 = G__2223;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2221 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2221__delegate.call(this, x, y, more);
};
G__2221.cljs$lang$maxFixedArity = 2;
G__2221.cljs$lang$applyTo = (function (arglist__2224){
var x = cljs.core.first(arglist__2224);
var y = cljs.core.first(cljs.core.next(arglist__2224));
var more = cljs.core.rest(cljs.core.next(arglist__2224));
return G__2221__delegate.call(this, x, y, more);
});
return G__2221;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2217.call(this,x);
case  2 :
return distinct_QMARK___2218.call(this,x,y);
default:
return distinct_QMARK___2219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2219.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2225 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2225)))
{return r__2225;
} else
{if(cljs.core.truth_(r__2225))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2227 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2228 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2226 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2226,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2226);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2227.call(this,comp);
case  2 :
return sort__2228.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2230 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2231 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2230.call(this,keyfn,comp);
case  3 :
return sort_by__2231.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2233 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2234 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2233.call(this,f,val);
case  3 :
return reduce__2234.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2240 = (function (f,coll){
var temp__3723__auto____2236 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2236))
{var s__2237 = temp__3723__auto____2236;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2237),cljs.core.next.call(null,s__2237));
} else
{return f.call(null);
}
});
var seq_reduce__2241 = (function (f,val,coll){
var val__2238 = val;
var coll__2239 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2239))
{{
var G__2243 = f.call(null,val__2238,cljs.core.first.call(null,coll__2239));
var G__2244 = cljs.core.next.call(null,coll__2239);
val__2238 = G__2243;
coll__2239 = G__2244;
continue;
}
} else
{return val__2238;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2240.call(this,f,val);
case  3 :
return seq_reduce__2241.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2245 = null;
var G__2245__2246 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2245__2247 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2245 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2245__2246.call(this,coll,f);
case  3 :
return G__2245__2247.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2245;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2249 = (function (){
return 0;
});
var _PLUS___2250 = (function (x){
return x;
});
var _PLUS___2251 = (function (x,y){
return (x + y);
});
var _PLUS___2252 = (function() { 
var G__2254__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2254 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2254__delegate.call(this, x, y, more);
};
G__2254.cljs$lang$maxFixedArity = 2;
G__2254.cljs$lang$applyTo = (function (arglist__2255){
var x = cljs.core.first(arglist__2255);
var y = cljs.core.first(cljs.core.next(arglist__2255));
var more = cljs.core.rest(cljs.core.next(arglist__2255));
return G__2254__delegate.call(this, x, y, more);
});
return G__2254;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2249.call(this);
case  1 :
return _PLUS___2250.call(this,x);
case  2 :
return _PLUS___2251.call(this,x,y);
default:
return _PLUS___2252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2252.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2256 = (function (x){
return (- x);
});
var ___2257 = (function (x,y){
return (x - y);
});
var ___2258 = (function() { 
var G__2260__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2260 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2260__delegate.call(this, x, y, more);
};
G__2260.cljs$lang$maxFixedArity = 2;
G__2260.cljs$lang$applyTo = (function (arglist__2261){
var x = cljs.core.first(arglist__2261);
var y = cljs.core.first(cljs.core.next(arglist__2261));
var more = cljs.core.rest(cljs.core.next(arglist__2261));
return G__2260__delegate.call(this, x, y, more);
});
return G__2260;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2256.call(this,x);
case  2 :
return ___2257.call(this,x,y);
default:
return ___2258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2258.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2262 = (function (){
return 1;
});
var _STAR___2263 = (function (x){
return x;
});
var _STAR___2264 = (function (x,y){
return (x * y);
});
var _STAR___2265 = (function() { 
var G__2267__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2267 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2267__delegate.call(this, x, y, more);
};
G__2267.cljs$lang$maxFixedArity = 2;
G__2267.cljs$lang$applyTo = (function (arglist__2268){
var x = cljs.core.first(arglist__2268);
var y = cljs.core.first(cljs.core.next(arglist__2268));
var more = cljs.core.rest(cljs.core.next(arglist__2268));
return G__2267__delegate.call(this, x, y, more);
});
return G__2267;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2262.call(this);
case  1 :
return _STAR___2263.call(this,x);
case  2 :
return _STAR___2264.call(this,x,y);
default:
return _STAR___2265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2265.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2269 = (function (x){
return (1 / x);
});
var _SLASH___2270 = (function (x,y){
return (x / y);
});
var _SLASH___2271 = (function() { 
var G__2273__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2273 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2273__delegate.call(this, x, y, more);
};
G__2273.cljs$lang$maxFixedArity = 2;
G__2273.cljs$lang$applyTo = (function (arglist__2274){
var x = cljs.core.first(arglist__2274);
var y = cljs.core.first(cljs.core.next(arglist__2274));
var more = cljs.core.rest(cljs.core.next(arglist__2274));
return G__2273__delegate.call(this, x, y, more);
});
return G__2273;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2269.call(this,x);
case  2 :
return _SLASH___2270.call(this,x,y);
default:
return _SLASH___2271.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2271.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2275 = (function (x){
return true;
});
var _LT___2276 = (function (x,y){
return (x < y);
});
var _LT___2277 = (function() { 
var G__2279__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2280 = y;
var G__2281 = cljs.core.first.call(null,more);
var G__2282 = cljs.core.next.call(null,more);
x = G__2280;
y = G__2281;
more = G__2282;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2279 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2279__delegate.call(this, x, y, more);
};
G__2279.cljs$lang$maxFixedArity = 2;
G__2279.cljs$lang$applyTo = (function (arglist__2283){
var x = cljs.core.first(arglist__2283);
var y = cljs.core.first(cljs.core.next(arglist__2283));
var more = cljs.core.rest(cljs.core.next(arglist__2283));
return G__2279__delegate.call(this, x, y, more);
});
return G__2279;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2275.call(this,x);
case  2 :
return _LT___2276.call(this,x,y);
default:
return _LT___2277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2277.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2284 = (function (x){
return true;
});
var _LT__EQ___2285 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2286 = (function() { 
var G__2288__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2289 = y;
var G__2290 = cljs.core.first.call(null,more);
var G__2291 = cljs.core.next.call(null,more);
x = G__2289;
y = G__2290;
more = G__2291;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2288 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2288__delegate.call(this, x, y, more);
};
G__2288.cljs$lang$maxFixedArity = 2;
G__2288.cljs$lang$applyTo = (function (arglist__2292){
var x = cljs.core.first(arglist__2292);
var y = cljs.core.first(cljs.core.next(arglist__2292));
var more = cljs.core.rest(cljs.core.next(arglist__2292));
return G__2288__delegate.call(this, x, y, more);
});
return G__2288;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2284.call(this,x);
case  2 :
return _LT__EQ___2285.call(this,x,y);
default:
return _LT__EQ___2286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2286.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2293 = (function (x){
return true;
});
var _GT___2294 = (function (x,y){
return (x > y);
});
var _GT___2295 = (function() { 
var G__2297__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2298 = y;
var G__2299 = cljs.core.first.call(null,more);
var G__2300 = cljs.core.next.call(null,more);
x = G__2298;
y = G__2299;
more = G__2300;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2297 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2297__delegate.call(this, x, y, more);
};
G__2297.cljs$lang$maxFixedArity = 2;
G__2297.cljs$lang$applyTo = (function (arglist__2301){
var x = cljs.core.first(arglist__2301);
var y = cljs.core.first(cljs.core.next(arglist__2301));
var more = cljs.core.rest(cljs.core.next(arglist__2301));
return G__2297__delegate.call(this, x, y, more);
});
return G__2297;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2293.call(this,x);
case  2 :
return _GT___2294.call(this,x,y);
default:
return _GT___2295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2295.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2302 = (function (x){
return true;
});
var _GT__EQ___2303 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2304 = (function() { 
var G__2306__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2307 = y;
var G__2308 = cljs.core.first.call(null,more);
var G__2309 = cljs.core.next.call(null,more);
x = G__2307;
y = G__2308;
more = G__2309;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2306 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2306__delegate.call(this, x, y, more);
};
G__2306.cljs$lang$maxFixedArity = 2;
G__2306.cljs$lang$applyTo = (function (arglist__2310){
var x = cljs.core.first(arglist__2310);
var y = cljs.core.first(cljs.core.next(arglist__2310));
var more = cljs.core.rest(cljs.core.next(arglist__2310));
return G__2306__delegate.call(this, x, y, more);
});
return G__2306;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2302.call(this,x);
case  2 :
return _GT__EQ___2303.call(this,x,y);
default:
return _GT__EQ___2304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2304.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2311 = (function (x){
return x;
});
var max__2312 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2313 = (function() { 
var G__2315__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2315 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2315__delegate.call(this, x, y, more);
};
G__2315.cljs$lang$maxFixedArity = 2;
G__2315.cljs$lang$applyTo = (function (arglist__2316){
var x = cljs.core.first(arglist__2316);
var y = cljs.core.first(cljs.core.next(arglist__2316));
var more = cljs.core.rest(cljs.core.next(arglist__2316));
return G__2315__delegate.call(this, x, y, more);
});
return G__2315;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2311.call(this,x);
case  2 :
return max__2312.call(this,x,y);
default:
return max__2313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2313.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2317 = (function (x){
return x;
});
var min__2318 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2319 = (function() { 
var G__2321__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2321 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2321__delegate.call(this, x, y, more);
};
G__2321.cljs$lang$maxFixedArity = 2;
G__2321.cljs$lang$applyTo = (function (arglist__2322){
var x = cljs.core.first(arglist__2322);
var y = cljs.core.first(cljs.core.next(arglist__2322));
var more = cljs.core.rest(cljs.core.next(arglist__2322));
return G__2321__delegate.call(this, x, y, more);
});
return G__2321;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2317.call(this,x);
case  2 :
return min__2318.call(this,x,y);
default:
return min__2319.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2319.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2323 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2323) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2324 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2324));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2325 = (function (){
return Math.random.call(null);
});
var rand__2326 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2325.call(this);
case  1 :
return rand__2326.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2328 = (function (x){
return true;
});
var _EQ__EQ___2329 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2330 = (function() { 
var G__2332__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2333 = y;
var G__2334 = cljs.core.first.call(null,more);
var G__2335 = cljs.core.next.call(null,more);
x = G__2333;
y = G__2334;
more = G__2335;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2332 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2332__delegate.call(this, x, y, more);
};
G__2332.cljs$lang$maxFixedArity = 2;
G__2332.cljs$lang$applyTo = (function (arglist__2336){
var x = cljs.core.first(arglist__2336);
var y = cljs.core.first(cljs.core.next(arglist__2336));
var more = cljs.core.rest(cljs.core.next(arglist__2336));
return G__2332__delegate.call(this, x, y, more);
});
return G__2332;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2328.call(this,x);
case  2 :
return _EQ__EQ___2329.call(this,x,y);
default:
return _EQ__EQ___2330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2330.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2337 = n;
var xs__2338 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2339 = xs__2338;

if(cljs.core.truth_(and__3574__auto____2339))
{return cljs.core.pos_QMARK_.call(null,n__2337);
} else
{return and__3574__auto____2339;
}
})()))
{{
var G__2340 = cljs.core.dec.call(null,n__2337);
var G__2341 = cljs.core.next.call(null,xs__2338);
n__2337 = G__2340;
xs__2338 = G__2341;
continue;
}
} else
{return xs__2338;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2346 = null;
var G__2346__2347 = (function (coll,n){
var temp__3723__auto____2342 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2342))
{var xs__2343 = temp__3723__auto____2342;

return cljs.core.first.call(null,xs__2343);
} else
{throw "Index out of bounds";
}
});
var G__2346__2348 = (function (coll,n,not_found){
var temp__3723__auto____2344 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2344))
{var xs__2345 = temp__3723__auto____2344;

return cljs.core.first.call(null,xs__2345);
} else
{return not_found;
}
});
G__2346 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2346__2347.call(this,coll,n);
case  3 :
return G__2346__2348.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2346;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2350 = (function (){
return "";
});
var str__2351 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2352 = (function() { 
var G__2354__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2355 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2356 = cljs.core.next.call(null,more);
sb = G__2355;
more = G__2356;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2354 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2354__delegate.call(this, x, ys);
};
G__2354.cljs$lang$maxFixedArity = 1;
G__2354.cljs$lang$applyTo = (function (arglist__2357){
var x = cljs.core.first(arglist__2357);
var ys = cljs.core.rest(arglist__2357);
return G__2354__delegate.call(this, x, ys);
});
return G__2354;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2350.call(this);
case  1 :
return str__2351.call(this,x);
default:
return str__2352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2352.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2358 = (function (s,start){
return s.substring(start);
});
var subs__2359 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2358.call(this,s,start);
case  3 :
return subs__2359.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2361 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2362 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2361.call(this,ns);
case  2 :
return symbol__2362.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2364 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2365 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2364.call(this,ns);
case  2 :
return keyword__2365.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2367 = cljs.core.seq.call(null,x);
var ys__2368 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2367)))
{return cljs.core.nil_QMARK_.call(null,ys__2368);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2368)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2367),cljs.core.first.call(null,ys__2368))))
{{
var G__2369 = cljs.core.next.call(null,xs__2367);
var G__2370 = cljs.core.next.call(null,ys__2368);
xs__2367 = G__2369;
ys__2368 = G__2370;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2371_SHARP_,p2__2372_SHARP_){
return cljs.core.hash_combine.call(null,p1__2371_SHARP_,cljs.core.hash.call(null,p2__2372_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2373 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2374 = this;
return (new cljs.core.List(this__2374.meta,o,coll,cljs.core.inc.call(null,this__2374.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2375 = this;
return this__2375.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2376 = this;
return this__2376.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2377 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2378 = this;
return this__2378.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2379 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2380 = this;
return (new cljs.core.List(meta,this__2380.first,this__2380.rest,this__2380.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2381 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2382 = this;
return this__2382.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2383 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2384 = this;
return this__2384.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2385 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2386 = this;
return (new cljs.core.List(this__2386.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2387 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2388 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2389 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2390 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2391 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2392 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2393 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2394 = this;
return this__2394.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2395 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2396 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2397){
var items = cljs.core.seq( arglist__2397 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2398 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2399 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2400 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2401 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2401.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2402 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2403 = this;
return this__2403.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2404 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2404.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2404.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2405 = this;
return this__2405.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2406 = this;
return (new cljs.core.Cons(meta,this__2406.first,this__2406.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2407 = null;
var G__2407__2408 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2407__2409 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2407 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2407__2408.call(this,string,f);
case  3 :
return G__2407__2409.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2407;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2411 = null;
var G__2411__2412 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2411__2413 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2411 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2411__2412.call(this,string,k);
case  3 :
return G__2411__2413.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2411;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2415 = null;
var G__2415__2416 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2415__2417 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2415 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2415__2416.call(this,string,n);
case  3 :
return G__2415__2417.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2415;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2419 = null;
var G__2419__2420 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2419__2421 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2419 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2419__2420.call(this,_,coll);
case  3 :
return G__2419__2421.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2419;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2423 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2423;
} else
{lazy_seq.x = x__2423.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2424 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2425 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2426 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2427 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2427.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2428 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2429 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2430 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2431 = this;
return this__2431.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2432 = this;
return (new cljs.core.LazySeq(meta,this__2432.realized,this__2432.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2433 = cljs.core.array.call(null);

var s__2434 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2434)))
{ary__2433.push(cljs.core.first.call(null,s__2434));
{
var G__2435 = cljs.core.next.call(null,s__2434);
s__2434 = G__2435;
continue;
}
} else
{return ary__2433;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2436 = s;
var i__2437 = n;
var sum__2438 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2439 = cljs.core.pos_QMARK_.call(null,i__2437);

if(cljs.core.truth_(and__3574__auto____2439))
{return cljs.core.seq.call(null,s__2436);
} else
{return and__3574__auto____2439;
}
})()))
{{
var G__2440 = cljs.core.next.call(null,s__2436);
var G__2441 = cljs.core.dec.call(null,i__2437);
var G__2442 = cljs.core.inc.call(null,sum__2438);
s__2436 = G__2440;
i__2437 = G__2441;
sum__2438 = G__2442;
continue;
}
} else
{return sum__2438;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2446 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2447 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2448 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2443 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2443))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2443),concat.call(null,cljs.core.rest.call(null,s__2443),y));
} else
{return y;
}
})));
});
var concat__2449 = (function() { 
var G__2451__delegate = function (x,y,zs){
var cat__2445 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2444 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2444))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2444),cat.call(null,cljs.core.rest.call(null,xys__2444),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2445.call(null,concat.call(null,x,y),zs);
};
var G__2451 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2451__delegate.call(this, x, y, zs);
};
G__2451.cljs$lang$maxFixedArity = 2;
G__2451.cljs$lang$applyTo = (function (arglist__2452){
var x = cljs.core.first(arglist__2452);
var y = cljs.core.first(cljs.core.next(arglist__2452));
var zs = cljs.core.rest(cljs.core.next(arglist__2452));
return G__2451__delegate.call(this, x, y, zs);
});
return G__2451;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2446.call(this);
case  1 :
return concat__2447.call(this,x);
case  2 :
return concat__2448.call(this,x,y);
default:
return concat__2449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2449.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2453 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2454 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2455 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2456 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2457 = (function() { 
var G__2459__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2459 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2459__delegate.call(this, a, b, c, d, more);
};
G__2459.cljs$lang$maxFixedArity = 4;
G__2459.cljs$lang$applyTo = (function (arglist__2460){
var a = cljs.core.first(arglist__2460);
var b = cljs.core.first(cljs.core.next(arglist__2460));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2460)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2460))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2460))));
return G__2459__delegate.call(this, a, b, c, d, more);
});
return G__2459;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2453.call(this,a);
case  2 :
return list_STAR___2454.call(this,a,b);
case  3 :
return list_STAR___2455.call(this,a,b,c);
case  4 :
return list_STAR___2456.call(this,a,b,c,d);
default:
return list_STAR___2457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2457.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2470 = (function (f,args){
var fixed_arity__2461 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2461)),fixed_arity__2461)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2471 = (function (f,x,args){
var arglist__2462 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2463 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2462,fixed_arity__2463),fixed_arity__2463)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2462));
} else
{return f.cljs$lang$applyTo(arglist__2462);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2462));
}
});
var apply__2472 = (function (f,x,y,args){
var arglist__2464 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2465 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2464,fixed_arity__2465),fixed_arity__2465)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2464));
} else
{return f.cljs$lang$applyTo(arglist__2464);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2464));
}
});
var apply__2473 = (function (f,x,y,z,args){
var arglist__2466 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2467 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2466,fixed_arity__2467),fixed_arity__2467)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2466));
} else
{return f.cljs$lang$applyTo(arglist__2466);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2466));
}
});
var apply__2474 = (function() { 
var G__2476__delegate = function (f,a,b,c,d,args){
var arglist__2468 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2469 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2468,fixed_arity__2469),fixed_arity__2469)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2468));
} else
{return f.cljs$lang$applyTo(arglist__2468);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2468));
}
};
var G__2476 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2476__delegate.call(this, f, a, b, c, d, args);
};
G__2476.cljs$lang$maxFixedArity = 5;
G__2476.cljs$lang$applyTo = (function (arglist__2477){
var f = cljs.core.first(arglist__2477);
var a = cljs.core.first(cljs.core.next(arglist__2477));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2477)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2477))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2477)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2477)))));
return G__2476__delegate.call(this, f, a, b, c, d, args);
});
return G__2476;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2470.call(this,f,a);
case  3 :
return apply__2471.call(this,f,a,b);
case  4 :
return apply__2472.call(this,f,a,b,c);
case  5 :
return apply__2473.call(this,f,a,b,c,d);
default:
return apply__2474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2474.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2478){
var obj = cljs.core.first(arglist__2478);
var f = cljs.core.first(cljs.core.next(arglist__2478));
var args = cljs.core.rest(cljs.core.next(arglist__2478));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2479 = (function (x){
return false;
});
var not_EQ___2480 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2481 = (function() { 
var G__2483__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2483 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2483__delegate.call(this, x, y, more);
};
G__2483.cljs$lang$maxFixedArity = 2;
G__2483.cljs$lang$applyTo = (function (arglist__2484){
var x = cljs.core.first(arglist__2484);
var y = cljs.core.first(cljs.core.next(arglist__2484));
var more = cljs.core.rest(cljs.core.next(arglist__2484));
return G__2483__delegate.call(this, x, y, more);
});
return G__2483;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2479.call(this,x);
case  2 :
return not_EQ___2480.call(this,x,y);
default:
return not_EQ___2481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2481.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2485 = pred;
var G__2486 = cljs.core.next.call(null,coll);
pred = G__2485;
coll = G__2486;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2487 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2487))
{return or__3576__auto____2487;
} else
{{
var G__2488 = pred;
var G__2489 = cljs.core.next.call(null,coll);
pred = G__2488;
coll = G__2489;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2490 = null;
var G__2490__2491 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2490__2492 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2490__2493 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2490__2494 = (function() { 
var G__2496__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2496 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2496__delegate.call(this, x, y, zs);
};
G__2496.cljs$lang$maxFixedArity = 2;
G__2496.cljs$lang$applyTo = (function (arglist__2497){
var x = cljs.core.first(arglist__2497);
var y = cljs.core.first(cljs.core.next(arglist__2497));
var zs = cljs.core.rest(cljs.core.next(arglist__2497));
return G__2496__delegate.call(this, x, y, zs);
});
return G__2496;
})()
;
G__2490 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2490__2491.call(this);
case  1 :
return G__2490__2492.call(this,x);
case  2 :
return G__2490__2493.call(this,x,y);
default:
return G__2490__2494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2490.cljs$lang$maxFixedArity = 2;
G__2490.cljs$lang$applyTo = G__2490__2494.cljs$lang$applyTo;
return G__2490;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2498__delegate = function (args){
return x;
};
var G__2498 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2498__delegate.call(this, args);
};
G__2498.cljs$lang$maxFixedArity = 0;
G__2498.cljs$lang$applyTo = (function (arglist__2499){
var args = cljs.core.seq( arglist__2499 );;
return G__2498__delegate.call(this, args);
});
return G__2498;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2503 = (function (){
return cljs.core.identity;
});
var comp__2504 = (function (f){
return f;
});
var comp__2505 = (function (f,g){
return (function() {
var G__2509 = null;
var G__2509__2510 = (function (){
return f.call(null,g.call(null));
});
var G__2509__2511 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2509__2512 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2509__2513 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2509__2514 = (function() { 
var G__2516__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2516 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2516__delegate.call(this, x, y, z, args);
};
G__2516.cljs$lang$maxFixedArity = 3;
G__2516.cljs$lang$applyTo = (function (arglist__2517){
var x = cljs.core.first(arglist__2517);
var y = cljs.core.first(cljs.core.next(arglist__2517));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2517)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2517)));
return G__2516__delegate.call(this, x, y, z, args);
});
return G__2516;
})()
;
G__2509 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2509__2510.call(this);
case  1 :
return G__2509__2511.call(this,x);
case  2 :
return G__2509__2512.call(this,x,y);
case  3 :
return G__2509__2513.call(this,x,y,z);
default:
return G__2509__2514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2509.cljs$lang$maxFixedArity = 3;
G__2509.cljs$lang$applyTo = G__2509__2514.cljs$lang$applyTo;
return G__2509;
})()
});
var comp__2506 = (function (f,g,h){
return (function() {
var G__2518 = null;
var G__2518__2519 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2518__2520 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2518__2521 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2518__2522 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2518__2523 = (function() { 
var G__2525__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2525 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2525__delegate.call(this, x, y, z, args);
};
G__2525.cljs$lang$maxFixedArity = 3;
G__2525.cljs$lang$applyTo = (function (arglist__2526){
var x = cljs.core.first(arglist__2526);
var y = cljs.core.first(cljs.core.next(arglist__2526));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2526)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2526)));
return G__2525__delegate.call(this, x, y, z, args);
});
return G__2525;
})()
;
G__2518 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2518__2519.call(this);
case  1 :
return G__2518__2520.call(this,x);
case  2 :
return G__2518__2521.call(this,x,y);
case  3 :
return G__2518__2522.call(this,x,y,z);
default:
return G__2518__2523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2518.cljs$lang$maxFixedArity = 3;
G__2518.cljs$lang$applyTo = G__2518__2523.cljs$lang$applyTo;
return G__2518;
})()
});
var comp__2507 = (function() { 
var G__2527__delegate = function (f1,f2,f3,fs){
var fs__2500 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2528__delegate = function (args){
var ret__2501 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2500),args);
var fs__2502 = cljs.core.next.call(null,fs__2500);

while(true){
if(cljs.core.truth_(fs__2502))
{{
var G__2529 = cljs.core.first.call(null,fs__2502).call(null,ret__2501);
var G__2530 = cljs.core.next.call(null,fs__2502);
ret__2501 = G__2529;
fs__2502 = G__2530;
continue;
}
} else
{return ret__2501;
}
break;
}
};
var G__2528 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2528__delegate.call(this, args);
};
G__2528.cljs$lang$maxFixedArity = 0;
G__2528.cljs$lang$applyTo = (function (arglist__2531){
var args = cljs.core.seq( arglist__2531 );;
return G__2528__delegate.call(this, args);
});
return G__2528;
})()
;
};
var G__2527 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2527__delegate.call(this, f1, f2, f3, fs);
};
G__2527.cljs$lang$maxFixedArity = 3;
G__2527.cljs$lang$applyTo = (function (arglist__2532){
var f1 = cljs.core.first(arglist__2532);
var f2 = cljs.core.first(cljs.core.next(arglist__2532));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2532)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2532)));
return G__2527__delegate.call(this, f1, f2, f3, fs);
});
return G__2527;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2503.call(this);
case  1 :
return comp__2504.call(this,f1);
case  2 :
return comp__2505.call(this,f1,f2);
case  3 :
return comp__2506.call(this,f1,f2,f3);
default:
return comp__2507.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2507.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2533 = (function (f,arg1){
return (function() { 
var G__2538__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2538 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2538__delegate.call(this, args);
};
G__2538.cljs$lang$maxFixedArity = 0;
G__2538.cljs$lang$applyTo = (function (arglist__2539){
var args = cljs.core.seq( arglist__2539 );;
return G__2538__delegate.call(this, args);
});
return G__2538;
})()
;
});
var partial__2534 = (function (f,arg1,arg2){
return (function() { 
var G__2540__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2540 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2540__delegate.call(this, args);
};
G__2540.cljs$lang$maxFixedArity = 0;
G__2540.cljs$lang$applyTo = (function (arglist__2541){
var args = cljs.core.seq( arglist__2541 );;
return G__2540__delegate.call(this, args);
});
return G__2540;
})()
;
});
var partial__2535 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2542__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2542 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2542__delegate.call(this, args);
};
G__2542.cljs$lang$maxFixedArity = 0;
G__2542.cljs$lang$applyTo = (function (arglist__2543){
var args = cljs.core.seq( arglist__2543 );;
return G__2542__delegate.call(this, args);
});
return G__2542;
})()
;
});
var partial__2536 = (function() { 
var G__2544__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2545__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2545 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2545__delegate.call(this, args);
};
G__2545.cljs$lang$maxFixedArity = 0;
G__2545.cljs$lang$applyTo = (function (arglist__2546){
var args = cljs.core.seq( arglist__2546 );;
return G__2545__delegate.call(this, args);
});
return G__2545;
})()
;
};
var G__2544 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2544__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2544.cljs$lang$maxFixedArity = 4;
G__2544.cljs$lang$applyTo = (function (arglist__2547){
var f = cljs.core.first(arglist__2547);
var arg1 = cljs.core.first(cljs.core.next(arglist__2547));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2547)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2547))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2547))));
return G__2544__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2544;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2533.call(this,f,arg1);
case  3 :
return partial__2534.call(this,f,arg1,arg2);
case  4 :
return partial__2535.call(this,f,arg1,arg2,arg3);
default:
return partial__2536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2536.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2548 = (function (f,x){
return (function() {
var G__2552 = null;
var G__2552__2553 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2552__2554 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2552__2555 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2552__2556 = (function() { 
var G__2558__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2558 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2558__delegate.call(this, a, b, c, ds);
};
G__2558.cljs$lang$maxFixedArity = 3;
G__2558.cljs$lang$applyTo = (function (arglist__2559){
var a = cljs.core.first(arglist__2559);
var b = cljs.core.first(cljs.core.next(arglist__2559));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2559)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2559)));
return G__2558__delegate.call(this, a, b, c, ds);
});
return G__2558;
})()
;
G__2552 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2552__2553.call(this,a);
case  2 :
return G__2552__2554.call(this,a,b);
case  3 :
return G__2552__2555.call(this,a,b,c);
default:
return G__2552__2556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2552.cljs$lang$maxFixedArity = 3;
G__2552.cljs$lang$applyTo = G__2552__2556.cljs$lang$applyTo;
return G__2552;
})()
});
var fnil__2549 = (function (f,x,y){
return (function() {
var G__2560 = null;
var G__2560__2561 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2560__2562 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2560__2563 = (function() { 
var G__2565__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2565 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2565__delegate.call(this, a, b, c, ds);
};
G__2565.cljs$lang$maxFixedArity = 3;
G__2565.cljs$lang$applyTo = (function (arglist__2566){
var a = cljs.core.first(arglist__2566);
var b = cljs.core.first(cljs.core.next(arglist__2566));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2566)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2566)));
return G__2565__delegate.call(this, a, b, c, ds);
});
return G__2565;
})()
;
G__2560 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2560__2561.call(this,a,b);
case  3 :
return G__2560__2562.call(this,a,b,c);
default:
return G__2560__2563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2560.cljs$lang$maxFixedArity = 3;
G__2560.cljs$lang$applyTo = G__2560__2563.cljs$lang$applyTo;
return G__2560;
})()
});
var fnil__2550 = (function (f,x,y,z){
return (function() {
var G__2567 = null;
var G__2567__2568 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2567__2569 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2567__2570 = (function() { 
var G__2572__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2572 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2572__delegate.call(this, a, b, c, ds);
};
G__2572.cljs$lang$maxFixedArity = 3;
G__2572.cljs$lang$applyTo = (function (arglist__2573){
var a = cljs.core.first(arglist__2573);
var b = cljs.core.first(cljs.core.next(arglist__2573));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2573)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2573)));
return G__2572__delegate.call(this, a, b, c, ds);
});
return G__2572;
})()
;
G__2567 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2567__2568.call(this,a,b);
case  3 :
return G__2567__2569.call(this,a,b,c);
default:
return G__2567__2570.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2567.cljs$lang$maxFixedArity = 3;
G__2567.cljs$lang$applyTo = G__2567__2570.cljs$lang$applyTo;
return G__2567;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2548.call(this,f,x);
case  3 :
return fnil__2549.call(this,f,x,y);
case  4 :
return fnil__2550.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2576 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2574 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2574))
{var s__2575 = temp__3726__auto____2574;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2575)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2575)));
} else
{return null;
}
})));
});

return mapi__2576.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2577 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2577))
{var s__2578 = temp__3726__auto____2577;

var x__2579 = f.call(null,cljs.core.first.call(null,s__2578));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2579)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2578));
} else
{return cljs.core.cons.call(null,x__2579,keep.call(null,f,cljs.core.rest.call(null,s__2578)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2589 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2586 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2586))
{var s__2587 = temp__3726__auto____2586;

var x__2588 = f.call(null,idx,cljs.core.first.call(null,s__2587));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2588)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2587));
} else
{return cljs.core.cons.call(null,x__2588,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2587)));
}
} else
{return null;
}
})));
});

return keepi__2589.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2634 = (function (p){
return (function() {
var ep1 = null;
var ep1__2639 = (function (){
return true;
});
var ep1__2640 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2641 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2596 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2596))
{return p.call(null,y);
} else
{return and__3574__auto____2596;
}
})());
});
var ep1__2642 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2597 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2597))
{var and__3574__auto____2598 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2598))
{return p.call(null,z);
} else
{return and__3574__auto____2598;
}
} else
{return and__3574__auto____2597;
}
})());
});
var ep1__2643 = (function() { 
var G__2645__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2599 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2599))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2599;
}
})());
};
var G__2645 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2645__delegate.call(this, x, y, z, args);
};
G__2645.cljs$lang$maxFixedArity = 3;
G__2645.cljs$lang$applyTo = (function (arglist__2646){
var x = cljs.core.first(arglist__2646);
var y = cljs.core.first(cljs.core.next(arglist__2646));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2646)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2646)));
return G__2645__delegate.call(this, x, y, z, args);
});
return G__2645;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2639.call(this);
case  1 :
return ep1__2640.call(this,x);
case  2 :
return ep1__2641.call(this,x,y);
case  3 :
return ep1__2642.call(this,x,y,z);
default:
return ep1__2643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2643.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2635 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2647 = (function (){
return true;
});
var ep2__2648 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2600 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2600))
{return p2.call(null,x);
} else
{return and__3574__auto____2600;
}
})());
});
var ep2__2649 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2601 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2601))
{var and__3574__auto____2602 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2602))
{var and__3574__auto____2603 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2603))
{return p2.call(null,y);
} else
{return and__3574__auto____2603;
}
} else
{return and__3574__auto____2602;
}
} else
{return and__3574__auto____2601;
}
})());
});
var ep2__2650 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2604 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2604))
{var and__3574__auto____2605 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2605))
{var and__3574__auto____2606 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2606))
{var and__3574__auto____2607 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2607))
{var and__3574__auto____2608 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2608))
{return p2.call(null,z);
} else
{return and__3574__auto____2608;
}
} else
{return and__3574__auto____2607;
}
} else
{return and__3574__auto____2606;
}
} else
{return and__3574__auto____2605;
}
} else
{return and__3574__auto____2604;
}
})());
});
var ep2__2651 = (function() { 
var G__2653__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2609 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2609))
{return cljs.core.every_QMARK_.call(null,(function (p1__2580_SHARP_){
var and__3574__auto____2610 = p1.call(null,p1__2580_SHARP_);

if(cljs.core.truth_(and__3574__auto____2610))
{return p2.call(null,p1__2580_SHARP_);
} else
{return and__3574__auto____2610;
}
}),args);
} else
{return and__3574__auto____2609;
}
})());
};
var G__2653 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2653__delegate.call(this, x, y, z, args);
};
G__2653.cljs$lang$maxFixedArity = 3;
G__2653.cljs$lang$applyTo = (function (arglist__2654){
var x = cljs.core.first(arglist__2654);
var y = cljs.core.first(cljs.core.next(arglist__2654));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2654)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2654)));
return G__2653__delegate.call(this, x, y, z, args);
});
return G__2653;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2647.call(this);
case  1 :
return ep2__2648.call(this,x);
case  2 :
return ep2__2649.call(this,x,y);
case  3 :
return ep2__2650.call(this,x,y,z);
default:
return ep2__2651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2651.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2636 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2655 = (function (){
return true;
});
var ep3__2656 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2611 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2611))
{var and__3574__auto____2612 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2612))
{return p3.call(null,x);
} else
{return and__3574__auto____2612;
}
} else
{return and__3574__auto____2611;
}
})());
});
var ep3__2657 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2613 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2613))
{var and__3574__auto____2614 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2614))
{var and__3574__auto____2615 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2615))
{var and__3574__auto____2616 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2616))
{var and__3574__auto____2617 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2617))
{return p3.call(null,y);
} else
{return and__3574__auto____2617;
}
} else
{return and__3574__auto____2616;
}
} else
{return and__3574__auto____2615;
}
} else
{return and__3574__auto____2614;
}
} else
{return and__3574__auto____2613;
}
})());
});
var ep3__2658 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2618 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2618))
{var and__3574__auto____2619 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2619))
{var and__3574__auto____2620 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2620))
{var and__3574__auto____2621 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2621))
{var and__3574__auto____2622 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2622))
{var and__3574__auto____2623 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2623))
{var and__3574__auto____2624 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2624))
{var and__3574__auto____2625 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2625))
{return p3.call(null,z);
} else
{return and__3574__auto____2625;
}
} else
{return and__3574__auto____2624;
}
} else
{return and__3574__auto____2623;
}
} else
{return and__3574__auto____2622;
}
} else
{return and__3574__auto____2621;
}
} else
{return and__3574__auto____2620;
}
} else
{return and__3574__auto____2619;
}
} else
{return and__3574__auto____2618;
}
})());
});
var ep3__2659 = (function() { 
var G__2661__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2626 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2626))
{return cljs.core.every_QMARK_.call(null,(function (p1__2581_SHARP_){
var and__3574__auto____2627 = p1.call(null,p1__2581_SHARP_);

if(cljs.core.truth_(and__3574__auto____2627))
{var and__3574__auto____2628 = p2.call(null,p1__2581_SHARP_);

if(cljs.core.truth_(and__3574__auto____2628))
{return p3.call(null,p1__2581_SHARP_);
} else
{return and__3574__auto____2628;
}
} else
{return and__3574__auto____2627;
}
}),args);
} else
{return and__3574__auto____2626;
}
})());
};
var G__2661 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2661__delegate.call(this, x, y, z, args);
};
G__2661.cljs$lang$maxFixedArity = 3;
G__2661.cljs$lang$applyTo = (function (arglist__2662){
var x = cljs.core.first(arglist__2662);
var y = cljs.core.first(cljs.core.next(arglist__2662));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2662)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2662)));
return G__2661__delegate.call(this, x, y, z, args);
});
return G__2661;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2655.call(this);
case  1 :
return ep3__2656.call(this,x);
case  2 :
return ep3__2657.call(this,x,y);
case  3 :
return ep3__2658.call(this,x,y,z);
default:
return ep3__2659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2659.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2637 = (function() { 
var G__2663__delegate = function (p1,p2,p3,ps){
var ps__2629 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2664 = (function (){
return true;
});
var epn__2665 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2582_SHARP_){
return p1__2582_SHARP_.call(null,x);
}),ps__2629);
});
var epn__2666 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2583_SHARP_){
var and__3574__auto____2630 = p1__2583_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2630))
{return p1__2583_SHARP_.call(null,y);
} else
{return and__3574__auto____2630;
}
}),ps__2629);
});
var epn__2667 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2584_SHARP_){
var and__3574__auto____2631 = p1__2584_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2631))
{var and__3574__auto____2632 = p1__2584_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2632))
{return p1__2584_SHARP_.call(null,z);
} else
{return and__3574__auto____2632;
}
} else
{return and__3574__auto____2631;
}
}),ps__2629);
});
var epn__2668 = (function() { 
var G__2670__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2633 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2633))
{return cljs.core.every_QMARK_.call(null,(function (p1__2585_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2585_SHARP_,args);
}),ps__2629);
} else
{return and__3574__auto____2633;
}
})());
};
var G__2670 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2670__delegate.call(this, x, y, z, args);
};
G__2670.cljs$lang$maxFixedArity = 3;
G__2670.cljs$lang$applyTo = (function (arglist__2671){
var x = cljs.core.first(arglist__2671);
var y = cljs.core.first(cljs.core.next(arglist__2671));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2671)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2671)));
return G__2670__delegate.call(this, x, y, z, args);
});
return G__2670;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2664.call(this);
case  1 :
return epn__2665.call(this,x);
case  2 :
return epn__2666.call(this,x,y);
case  3 :
return epn__2667.call(this,x,y,z);
default:
return epn__2668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2668.cljs$lang$applyTo;
return epn;
})()
};
var G__2663 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2663__delegate.call(this, p1, p2, p3, ps);
};
G__2663.cljs$lang$maxFixedArity = 3;
G__2663.cljs$lang$applyTo = (function (arglist__2672){
var p1 = cljs.core.first(arglist__2672);
var p2 = cljs.core.first(cljs.core.next(arglist__2672));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2672)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2672)));
return G__2663__delegate.call(this, p1, p2, p3, ps);
});
return G__2663;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2634.call(this,p1);
case  2 :
return every_pred__2635.call(this,p1,p2);
case  3 :
return every_pred__2636.call(this,p1,p2,p3);
default:
return every_pred__2637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2637.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2712 = (function (p){
return (function() {
var sp1 = null;
var sp1__2717 = (function (){
return null;
});
var sp1__2718 = (function (x){
return p.call(null,x);
});
var sp1__2719 = (function (x,y){
var or__3576__auto____2674 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2674))
{return or__3576__auto____2674;
} else
{return p.call(null,y);
}
});
var sp1__2720 = (function (x,y,z){
var or__3576__auto____2675 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2675))
{return or__3576__auto____2675;
} else
{var or__3576__auto____2676 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2676))
{return or__3576__auto____2676;
} else
{return p.call(null,z);
}
}
});
var sp1__2721 = (function() { 
var G__2723__delegate = function (x,y,z,args){
var or__3576__auto____2677 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2677))
{return or__3576__auto____2677;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2723 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2723__delegate.call(this, x, y, z, args);
};
G__2723.cljs$lang$maxFixedArity = 3;
G__2723.cljs$lang$applyTo = (function (arglist__2724){
var x = cljs.core.first(arglist__2724);
var y = cljs.core.first(cljs.core.next(arglist__2724));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2724)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2724)));
return G__2723__delegate.call(this, x, y, z, args);
});
return G__2723;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2717.call(this);
case  1 :
return sp1__2718.call(this,x);
case  2 :
return sp1__2719.call(this,x,y);
case  3 :
return sp1__2720.call(this,x,y,z);
default:
return sp1__2721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2721.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2713 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2725 = (function (){
return null;
});
var sp2__2726 = (function (x){
var or__3576__auto____2678 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2678))
{return or__3576__auto____2678;
} else
{return p2.call(null,x);
}
});
var sp2__2727 = (function (x,y){
var or__3576__auto____2679 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2679))
{return or__3576__auto____2679;
} else
{var or__3576__auto____2680 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2680))
{return or__3576__auto____2680;
} else
{var or__3576__auto____2681 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2681))
{return or__3576__auto____2681;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2728 = (function (x,y,z){
var or__3576__auto____2682 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2682))
{return or__3576__auto____2682;
} else
{var or__3576__auto____2683 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2683))
{return or__3576__auto____2683;
} else
{var or__3576__auto____2684 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2684))
{return or__3576__auto____2684;
} else
{var or__3576__auto____2685 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2685))
{return or__3576__auto____2685;
} else
{var or__3576__auto____2686 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2686))
{return or__3576__auto____2686;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2729 = (function() { 
var G__2731__delegate = function (x,y,z,args){
var or__3576__auto____2687 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2687))
{return or__3576__auto____2687;
} else
{return cljs.core.some.call(null,(function (p1__2590_SHARP_){
var or__3576__auto____2688 = p1.call(null,p1__2590_SHARP_);

if(cljs.core.truth_(or__3576__auto____2688))
{return or__3576__auto____2688;
} else
{return p2.call(null,p1__2590_SHARP_);
}
}),args);
}
};
var G__2731 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2731__delegate.call(this, x, y, z, args);
};
G__2731.cljs$lang$maxFixedArity = 3;
G__2731.cljs$lang$applyTo = (function (arglist__2732){
var x = cljs.core.first(arglist__2732);
var y = cljs.core.first(cljs.core.next(arglist__2732));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2732)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2732)));
return G__2731__delegate.call(this, x, y, z, args);
});
return G__2731;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2725.call(this);
case  1 :
return sp2__2726.call(this,x);
case  2 :
return sp2__2727.call(this,x,y);
case  3 :
return sp2__2728.call(this,x,y,z);
default:
return sp2__2729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2729.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2714 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2733 = (function (){
return null;
});
var sp3__2734 = (function (x){
var or__3576__auto____2689 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2689))
{return or__3576__auto____2689;
} else
{var or__3576__auto____2690 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2690))
{return or__3576__auto____2690;
} else
{return p3.call(null,x);
}
}
});
var sp3__2735 = (function (x,y){
var or__3576__auto____2691 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2691))
{return or__3576__auto____2691;
} else
{var or__3576__auto____2692 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2692))
{return or__3576__auto____2692;
} else
{var or__3576__auto____2693 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2693))
{return or__3576__auto____2693;
} else
{var or__3576__auto____2694 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2694))
{return or__3576__auto____2694;
} else
{var or__3576__auto____2695 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2695))
{return or__3576__auto____2695;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2736 = (function (x,y,z){
var or__3576__auto____2696 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2696))
{return or__3576__auto____2696;
} else
{var or__3576__auto____2697 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2697))
{return or__3576__auto____2697;
} else
{var or__3576__auto____2698 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2698))
{return or__3576__auto____2698;
} else
{var or__3576__auto____2699 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2699))
{return or__3576__auto____2699;
} else
{var or__3576__auto____2700 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2700))
{return or__3576__auto____2700;
} else
{var or__3576__auto____2701 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2701))
{return or__3576__auto____2701;
} else
{var or__3576__auto____2702 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2702))
{return or__3576__auto____2702;
} else
{var or__3576__auto____2703 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2703))
{return or__3576__auto____2703;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2737 = (function() { 
var G__2739__delegate = function (x,y,z,args){
var or__3576__auto____2704 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2704))
{return or__3576__auto____2704;
} else
{return cljs.core.some.call(null,(function (p1__2591_SHARP_){
var or__3576__auto____2705 = p1.call(null,p1__2591_SHARP_);

if(cljs.core.truth_(or__3576__auto____2705))
{return or__3576__auto____2705;
} else
{var or__3576__auto____2706 = p2.call(null,p1__2591_SHARP_);

if(cljs.core.truth_(or__3576__auto____2706))
{return or__3576__auto____2706;
} else
{return p3.call(null,p1__2591_SHARP_);
}
}
}),args);
}
};
var G__2739 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2739__delegate.call(this, x, y, z, args);
};
G__2739.cljs$lang$maxFixedArity = 3;
G__2739.cljs$lang$applyTo = (function (arglist__2740){
var x = cljs.core.first(arglist__2740);
var y = cljs.core.first(cljs.core.next(arglist__2740));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2740)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2740)));
return G__2739__delegate.call(this, x, y, z, args);
});
return G__2739;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2733.call(this);
case  1 :
return sp3__2734.call(this,x);
case  2 :
return sp3__2735.call(this,x,y);
case  3 :
return sp3__2736.call(this,x,y,z);
default:
return sp3__2737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2737.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2715 = (function() { 
var G__2741__delegate = function (p1,p2,p3,ps){
var ps__2707 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2742 = (function (){
return null;
});
var spn__2743 = (function (x){
return cljs.core.some.call(null,(function (p1__2592_SHARP_){
return p1__2592_SHARP_.call(null,x);
}),ps__2707);
});
var spn__2744 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2593_SHARP_){
var or__3576__auto____2708 = p1__2593_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2708))
{return or__3576__auto____2708;
} else
{return p1__2593_SHARP_.call(null,y);
}
}),ps__2707);
});
var spn__2745 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2594_SHARP_){
var or__3576__auto____2709 = p1__2594_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2709))
{return or__3576__auto____2709;
} else
{var or__3576__auto____2710 = p1__2594_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2710))
{return or__3576__auto____2710;
} else
{return p1__2594_SHARP_.call(null,z);
}
}
}),ps__2707);
});
var spn__2746 = (function() { 
var G__2748__delegate = function (x,y,z,args){
var or__3576__auto____2711 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2711))
{return or__3576__auto____2711;
} else
{return cljs.core.some.call(null,(function (p1__2595_SHARP_){
return cljs.core.some.call(null,p1__2595_SHARP_,args);
}),ps__2707);
}
};
var G__2748 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2748__delegate.call(this, x, y, z, args);
};
G__2748.cljs$lang$maxFixedArity = 3;
G__2748.cljs$lang$applyTo = (function (arglist__2749){
var x = cljs.core.first(arglist__2749);
var y = cljs.core.first(cljs.core.next(arglist__2749));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2749)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2749)));
return G__2748__delegate.call(this, x, y, z, args);
});
return G__2748;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2742.call(this);
case  1 :
return spn__2743.call(this,x);
case  2 :
return spn__2744.call(this,x,y);
case  3 :
return spn__2745.call(this,x,y,z);
default:
return spn__2746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2746.cljs$lang$applyTo;
return spn;
})()
};
var G__2741 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2741__delegate.call(this, p1, p2, p3, ps);
};
G__2741.cljs$lang$maxFixedArity = 3;
G__2741.cljs$lang$applyTo = (function (arglist__2750){
var p1 = cljs.core.first(arglist__2750);
var p2 = cljs.core.first(cljs.core.next(arglist__2750));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2750)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2750)));
return G__2741__delegate.call(this, p1, p2, p3, ps);
});
return G__2741;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2712.call(this,p1);
case  2 :
return some_fn__2713.call(this,p1,p2);
case  3 :
return some_fn__2714.call(this,p1,p2,p3);
default:
return some_fn__2715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2715.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2763 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2751 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2751))
{var s__2752 = temp__3726__auto____2751;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2752)),map.call(null,f,cljs.core.rest.call(null,s__2752)));
} else
{return null;
}
})));
});
var map__2764 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2753 = cljs.core.seq.call(null,c1);
var s2__2754 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2755 = s1__2753;

if(cljs.core.truth_(and__3574__auto____2755))
{return s2__2754;
} else
{return and__3574__auto____2755;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2753),cljs.core.first.call(null,s2__2754)),map.call(null,f,cljs.core.rest.call(null,s1__2753),cljs.core.rest.call(null,s2__2754)));
} else
{return null;
}
})));
});
var map__2765 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2756 = cljs.core.seq.call(null,c1);
var s2__2757 = cljs.core.seq.call(null,c2);
var s3__2758 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2759 = s1__2756;

if(cljs.core.truth_(and__3574__auto____2759))
{var and__3574__auto____2760 = s2__2757;

if(cljs.core.truth_(and__3574__auto____2760))
{return s3__2758;
} else
{return and__3574__auto____2760;
}
} else
{return and__3574__auto____2759;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2756),cljs.core.first.call(null,s2__2757),cljs.core.first.call(null,s3__2758)),map.call(null,f,cljs.core.rest.call(null,s1__2756),cljs.core.rest.call(null,s2__2757),cljs.core.rest.call(null,s3__2758)));
} else
{return null;
}
})));
});
var map__2766 = (function() { 
var G__2768__delegate = function (f,c1,c2,c3,colls){
var step__2762 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2761 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2761)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2761),step.call(null,map.call(null,cljs.core.rest,ss__2761)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2673_SHARP_){
return cljs.core.apply.call(null,f,p1__2673_SHARP_);
}),step__2762.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2768 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2768__delegate.call(this, f, c1, c2, c3, colls);
};
G__2768.cljs$lang$maxFixedArity = 4;
G__2768.cljs$lang$applyTo = (function (arglist__2769){
var f = cljs.core.first(arglist__2769);
var c1 = cljs.core.first(cljs.core.next(arglist__2769));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2769)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2769))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2769))));
return G__2768__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2768;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2763.call(this,f,c1);
case  3 :
return map__2764.call(this,f,c1,c2);
case  4 :
return map__2765.call(this,f,c1,c2,c3);
default:
return map__2766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2766.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2770 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2770))
{var s__2771 = temp__3726__auto____2770;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2771),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2771)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2774 = (function (n,coll){
while(true){
var s__2772 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2773 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2773))
{return s__2772;
} else
{return and__3574__auto____2773;
}
})()))
{{
var G__2775 = cljs.core.dec.call(null,n);
var G__2776 = cljs.core.rest.call(null,s__2772);
n = G__2775;
coll = G__2776;
continue;
}
} else
{return s__2772;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2774.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2777 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2778 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2777.call(this,n);
case  2 :
return drop_last__2778.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2780 = cljs.core.seq.call(null,coll);
var lead__2781 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2781))
{{
var G__2782 = cljs.core.next.call(null,s__2780);
var G__2783 = cljs.core.next.call(null,lead__2781);
s__2780 = G__2782;
lead__2781 = G__2783;
continue;
}
} else
{return s__2780;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2786 = (function (pred,coll){
while(true){
var s__2784 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2785 = s__2784;

if(cljs.core.truth_(and__3574__auto____2785))
{return pred.call(null,cljs.core.first.call(null,s__2784));
} else
{return and__3574__auto____2785;
}
})()))
{{
var G__2787 = pred;
var G__2788 = cljs.core.rest.call(null,s__2784);
pred = G__2787;
coll = G__2788;
continue;
}
} else
{return s__2784;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2786.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2789 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2789))
{var s__2790 = temp__3726__auto____2789;

return cljs.core.concat.call(null,s__2790,cycle.call(null,s__2790));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2791 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2792 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2791.call(this,n);
case  2 :
return repeat__2792.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2794 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2795 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2794.call(this,n);
case  2 :
return repeatedly__2795.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2801 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2797 = cljs.core.seq.call(null,c1);
var s2__2798 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2799 = s1__2797;

if(cljs.core.truth_(and__3574__auto____2799))
{return s2__2798;
} else
{return and__3574__auto____2799;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2797),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2798),interleave.call(null,cljs.core.rest.call(null,s1__2797),cljs.core.rest.call(null,s2__2798))));
} else
{return null;
}
})));
});
var interleave__2802 = (function() { 
var G__2804__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2800 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2800)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2800),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2800)));
} else
{return null;
}
})));
};
var G__2804 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2804__delegate.call(this, c1, c2, colls);
};
G__2804.cljs$lang$maxFixedArity = 2;
G__2804.cljs$lang$applyTo = (function (arglist__2805){
var c1 = cljs.core.first(arglist__2805);
var c2 = cljs.core.first(cljs.core.next(arglist__2805));
var colls = cljs.core.rest(cljs.core.next(arglist__2805));
return G__2804__delegate.call(this, c1, c2, colls);
});
return G__2804;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2801.call(this,c1,c2);
default:
return interleave__2802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2802.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2808 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2806 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2806))
{var coll__2807 = temp__3723__auto____2806;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2807),cat.call(null,cljs.core.rest.call(null,coll__2807),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2808.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2809 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2810 = (function() { 
var G__2812__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2812 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2812__delegate.call(this, f, coll, colls);
};
G__2812.cljs$lang$maxFixedArity = 2;
G__2812.cljs$lang$applyTo = (function (arglist__2813){
var f = cljs.core.first(arglist__2813);
var coll = cljs.core.first(cljs.core.next(arglist__2813));
var colls = cljs.core.rest(cljs.core.next(arglist__2813));
return G__2812__delegate.call(this, f, coll, colls);
});
return G__2812;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2809.call(this,f,coll);
default:
return mapcat__2810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2810.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2814 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2814))
{var s__2815 = temp__3726__auto____2814;

var f__2816 = cljs.core.first.call(null,s__2815);
var r__2817 = cljs.core.rest.call(null,s__2815);

if(cljs.core.truth_(pred.call(null,f__2816)))
{return cljs.core.cons.call(null,f__2816,filter.call(null,pred,r__2817));
} else
{return filter.call(null,pred,r__2817);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2819 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2819.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2818_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2818_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2826 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2827 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2820 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2820))
{var s__2821 = temp__3726__auto____2820;

var p__2822 = cljs.core.take.call(null,n,s__2821);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2822))))
{return cljs.core.cons.call(null,p__2822,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2821)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2828 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2823 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2823))
{var s__2824 = temp__3726__auto____2823;

var p__2825 = cljs.core.take.call(null,n,s__2824);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2825))))
{return cljs.core.cons.call(null,p__2825,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2824)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2825,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2826.call(this,n,step);
case  3 :
return partition__2827.call(this,n,step,pad);
case  4 :
return partition__2828.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2834 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2835 = (function (m,ks,not_found){
var sentinel__2830 = cljs.core.lookup_sentinel;
var m__2831 = m;
var ks__2832 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2832))
{var m__2833 = cljs.core.get.call(null,m__2831,cljs.core.first.call(null,ks__2832),sentinel__2830);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2830,m__2833)))
{return not_found;
} else
{{
var G__2837 = sentinel__2830;
var G__2838 = m__2833;
var G__2839 = cljs.core.next.call(null,ks__2832);
sentinel__2830 = G__2837;
m__2831 = G__2838;
ks__2832 = G__2839;
continue;
}
}
} else
{return m__2831;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2834.call(this,m,ks);
case  3 :
return get_in__2835.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2840,v){
var vec__2841__2842 = p__2840;
var k__2843 = cljs.core.nth.call(null,vec__2841__2842,0,null);
var ks__2844 = cljs.core.nthnext.call(null,vec__2841__2842,1);

if(cljs.core.truth_(ks__2844))
{return cljs.core.assoc.call(null,m,k__2843,assoc_in.call(null,cljs.core.get.call(null,m,k__2843),ks__2844,v));
} else
{return cljs.core.assoc.call(null,m,k__2843,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2845,f,args){
var vec__2846__2847 = p__2845;
var k__2848 = cljs.core.nth.call(null,vec__2846__2847,0,null);
var ks__2849 = cljs.core.nthnext.call(null,vec__2846__2847,1);

if(cljs.core.truth_(ks__2849))
{return cljs.core.assoc.call(null,m,k__2848,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2848),ks__2849,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2848,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2848),args));
}
};
var update_in = function (m,p__2845,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2845, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2850){
var m = cljs.core.first(arglist__2850);
var p__2845 = cljs.core.first(cljs.core.next(arglist__2850));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2850)));
return update_in__delegate.call(this, m, p__2845, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2851 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2852 = this;
var new_array__2853 = cljs.core.aclone.call(null,this__2852.array);

new_array__2853.push(o);
return (new cljs.core.Vector(this__2852.meta,new_array__2853));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2854 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2854.array.length,0)))
{var vector_seq__2855 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2854.array.length)))
{return cljs.core.cons.call(null,(this__2854.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2855.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2856 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2857 = this;
var count__2858 = this__2857.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2858,0)))
{return (this__2857.array[cljs.core.dec.call(null,count__2858)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2859 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2859.array.length,0)))
{var new_array__2860 = cljs.core.aclone.call(null,this__2859.array);

new_array__2860.pop();
return (new cljs.core.Vector(this__2859.meta,new_array__2860));
} else
{throw "Can't pop empty vector";
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2861 = this;
return (new cljs.core.Vector(meta,this__2861.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2862 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2862.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2876 = null;
var G__2876__2877 = (function (coll,n){
var this__2863 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2864 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2864))
{return cljs.core._LT_.call(null,n,this__2863.array.length);
} else
{return and__3574__auto____2864;
}
})()))
{return (this__2863.array[n]);
} else
{return null;
}
});
var G__2876__2878 = (function (coll,n,not_found){
var this__2865 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2866 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2866))
{return cljs.core._LT_.call(null,n,this__2865.array.length);
} else
{return and__3574__auto____2866;
}
})()))
{return (this__2865.array[n]);
} else
{return not_found;
}
});
G__2876 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2876__2877.call(this,coll,n);
case  3 :
return G__2876__2878.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2876;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2867 = this;
return this__2867.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2880 = null;
var G__2880__2881 = (function (v,f){
var this__2868 = this;
return cljs.core.ci_reduce.call(null,this__2868.array,f);
});
var G__2880__2882 = (function (v,f,start){
var this__2869 = this;
return cljs.core.ci_reduce.call(null,this__2869.array,f,start);
});
G__2880 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2880__2881.call(this,v,f);
case  3 :
return G__2880__2882.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2880;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2870 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2871 = this;
return this__2871.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2872 = this;
var new_array__2873 = cljs.core.aclone.call(null,this__2872.array);

(new_array__2873[k] = v);
return (new cljs.core.Vector(this__2872.meta,new_array__2873));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2884 = null;
var G__2884__2885 = (function (coll,k){
var this__2874 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2884__2886 = (function (coll,k,not_found){
var this__2875 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2884 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2884__2885.call(this,coll,k);
case  3 :
return G__2884__2886.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2884;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2888 = null;
var G__2888__2889 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2888__2890 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2888 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2888__2889.call(this,_,k);
case  3 :
return G__2888__2890.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2888;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2892){
var args = cljs.core.seq( arglist__2892 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2893 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2894 = array.length;

var i__2895 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2895,len__2894)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2895]))))
{return i__2895;
} else
{{
var G__2896 = cljs.core._PLUS_.call(null,i__2895,incr);
i__2895 = G__2896;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2898 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2899 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2897 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2897))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2897;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___2898.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2899.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2902 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2903 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2904 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2904.keys.length)))
{return cljs.core.map.call(null,(function (p1__2901_SHARP_){
return cljs.core.vector.call(null,p1__2901_SHARP_,(this__2904.strobj[p1__2901_SHARP_]));
}),this__2904.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2905 = this;
return (new cljs.core.ObjMap(meta,this__2905.keys,this__2905.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2906 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2907 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2907))
{return this__2906.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2907;
}
})()))
{var new_keys__2908 = cljs.core.aclone.call(null,this__2906.keys);
var new_strobj__2909 = goog.object.clone.call(null,this__2906.strobj);

new_keys__2908.splice(cljs.core.scan_array.call(null,1,k,new_keys__2908),1);
cljs.core.js_delete.call(null,new_strobj__2909,k);
return (new cljs.core.ObjMap(this__2906.meta,new_keys__2908,new_strobj__2909));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2910 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2910.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2911 = this;
return this__2911.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2912 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2913 = this;
return this__2913.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2914 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2915 = goog.object.clone.call(null,this__2914.strobj);
var overwrite_QMARK___2916 = new_strobj__2915.hasOwnProperty(k);

(new_strobj__2915[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2916))
{return (new cljs.core.ObjMap(this__2914.meta,this__2914.keys,new_strobj__2915));
} else
{var new_keys__2917 = cljs.core.aclone.call(null,this__2914.keys);

new_keys__2917.push(k);
return (new cljs.core.ObjMap(this__2914.meta,new_keys__2917,new_strobj__2915));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2914.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2918 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2918.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2921 = null;
var G__2921__2922 = (function (coll,k){
var this__2919 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2921__2923 = (function (coll,k,not_found){
var this__2920 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2920.strobj,(this__2920.strobj[k]),not_found);
});
G__2921 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2921__2922.call(this,coll,k);
case  3 :
return G__2921__2923.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2921;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2926 = null;
var G__2926__2927 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2926__2928 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2926 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2926__2927.call(this,_,k);
case  3 :
return G__2926__2928.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2926;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2930 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2931 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2932 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2932.count)))
{var hashes__2933 = cljs.core.js_keys.call(null,this__2932.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2925_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__2932.hashobj[p1__2925_SHARP_])));
}),hashes__2933);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2934 = this;
return (new cljs.core.HashMap(meta,this__2934.count,this__2934.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2935 = this;
var h__2936 = cljs.core.hash.call(null,k);
var bucket__2937 = (this__2935.hashobj[h__2936]);
var i__2938 = (cljs.core.truth_(bucket__2937)?cljs.core.scan_array.call(null,2,k,bucket__2937):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__2938)))
{return coll;
} else
{var new_hashobj__2939 = goog.object.clone.call(null,this__2935.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__2937.length)))
{cljs.core.js_delete.call(null,new_hashobj__2939,h__2936);
} else
{var new_bucket__2940 = cljs.core.aclone.call(null,bucket__2937);

new_bucket__2940.splice(i__2938,2);
(new_hashobj__2939[h__2936] = new_bucket__2940);
}
return (new cljs.core.HashMap(this__2935.meta,cljs.core.dec.call(null,this__2935.count),new_hashobj__2939));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2941 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__2941.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2942 = this;
return this__2942.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2943 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2944 = this;
return this__2944.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2945 = this;
var h__2946 = cljs.core.hash.call(null,k);
var bucket__2947 = (this__2945.hashobj[h__2946]);

if(cljs.core.truth_(bucket__2947))
{var new_bucket__2948 = cljs.core.aclone.call(null,bucket__2947);
var new_hashobj__2949 = goog.object.clone.call(null,this__2945.hashobj);

(new_hashobj__2949[h__2946] = new_bucket__2948);
var temp__3723__auto____2950 = cljs.core.scan_array.call(null,2,k,new_bucket__2948);

if(cljs.core.truth_(temp__3723__auto____2950))
{var i__2951 = temp__3723__auto____2950;

(new_bucket__2948[cljs.core.inc.call(null,i__2951)] = v);
return (new cljs.core.HashMap(this__2945.meta,this__2945.count,new_hashobj__2949));
} else
{new_bucket__2948.push(k,v);
return (new cljs.core.HashMap(this__2945.meta,cljs.core.inc.call(null,this__2945.count),new_hashobj__2949));
}
} else
{var new_hashobj__2952 = goog.object.clone.call(null,this__2945.hashobj);

(new_hashobj__2952[h__2946] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__2945.meta,cljs.core.inc.call(null,this__2945.count),new_hashobj__2952));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2953 = this;
var bucket__2954 = (this__2953.hashobj[cljs.core.hash.call(null,k)]);
var i__2955 = (cljs.core.truth_(bucket__2954)?cljs.core.scan_array.call(null,2,k,bucket__2954):null);

if(cljs.core.truth_(i__2955))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2960 = null;
var G__2960__2961 = (function (coll,k){
var this__2956 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2960__2962 = (function (coll,k,not_found){
var this__2957 = this;
var bucket__2958 = (this__2957.hashobj[cljs.core.hash.call(null,k)]);
var i__2959 = (cljs.core.truth_(bucket__2958)?cljs.core.scan_array.call(null,2,k,bucket__2958):null);

if(cljs.core.truth_(i__2959))
{return (bucket__2958[cljs.core.inc.call(null,i__2959)]);
} else
{return not_found;
}
});
G__2960 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2960__2961.call(this,coll,k);
case  3 :
return G__2960__2962.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2960;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__2964 = ks.length;

var i__2965 = 0;
var out__2966 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2965,len__2964)))
{{
var G__2967 = cljs.core.inc.call(null,i__2965);
var G__2968 = cljs.core.assoc.call(null,out__2966,(ks[i__2965]),(vs[i__2965]));
i__2965 = G__2967;
out__2966 = G__2968;
continue;
}
} else
{return out__2966;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__2969 = null;
var G__2969__2970 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2969__2971 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2969 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2969__2970.call(this,_,k);
case  3 :
return G__2969__2971.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2969;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__2973 = cljs.core.seq.call(null,keyvals);
var out__2974 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__2973))
{{
var G__2975 = cljs.core.nnext.call(null,in$__2973);
var G__2976 = cljs.core.assoc.call(null,out__2974,cljs.core.first.call(null,in$__2973),cljs.core.second.call(null,in$__2973));
in$__2973 = G__2975;
out__2974 = G__2976;
continue;
}
} else
{return out__2974;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__2977){
var keyvals = cljs.core.seq( arglist__2977 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__2978_SHARP_,p2__2979_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____2980 = p1__2978_SHARP_;

if(cljs.core.truth_(or__3576__auto____2980))
{return or__3576__auto____2980;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__2979_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__2981){
var maps = cljs.core.seq( arglist__2981 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__2984 = (function (m,e){
var k__2982 = cljs.core.first.call(null,e);
var v__2983 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__2982)))
{return cljs.core.assoc.call(null,m,k__2982,f.call(null,cljs.core.get.call(null,m,k__2982),v__2983));
} else
{return cljs.core.assoc.call(null,m,k__2982,v__2983);
}
});
var merge2__2986 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__2984,(function (){var or__3576__auto____2985 = m1;

if(cljs.core.truth_(or__3576__auto____2985))
{return or__3576__auto____2985;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__2986,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__2987){
var f = cljs.core.first(arglist__2987);
var maps = cljs.core.rest(arglist__2987);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__2989 = cljs.core.ObjMap.fromObject([],{});
var keys__2990 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__2990))
{var key__2991 = cljs.core.first.call(null,keys__2990);
var entry__2992 = cljs.core.get.call(null,map,key__2991);

{
var G__2993 = (cljs.core.truth_(entry__2992)?cljs.core.assoc.call(null,ret__2989,key__2991,entry__2992):ret__2989);
var G__2994 = cljs.core.next.call(null,keys__2990);
ret__2989 = G__2993;
keys__2990 = G__2994;
continue;
}
} else
{return ret__2989;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__2995 = this;
return (new cljs.core.Set(this__2995.meta,cljs.core.dissoc.call(null,this__2995.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2996 = this;
var and__3574__auto____2997 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____2997))
{var and__3574__auto____2998 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____2998))
{return cljs.core.every_QMARK_.call(null,(function (p1__2988_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__2988_SHARP_);
}),other);
} else
{return and__3574__auto____2998;
}
} else
{return and__3574__auto____2997;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2999 = this;
return (new cljs.core.Set(this__2999.meta,cljs.core.assoc.call(null,this__2999.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3000 = this;
return cljs.core.keys.call(null,this__3000.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3001 = this;
return (new cljs.core.Set(meta,this__3001.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3002 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3002.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3003 = this;
return this__3003.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3004 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3005 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3008 = null;
var G__3008__3009 = (function (coll,v){
var this__3006 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3008__3010 = (function (coll,v,not_found){
var this__3007 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3007.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3008 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3008__3009.call(this,coll,v);
case  3 :
return G__3008__3010.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3008;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3012 = null;
var G__3012__3013 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3012__3014 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3012 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3012__3013.call(this,_,k);
case  3 :
return G__3012__3014.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3012;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3017 = cljs.core.seq.call(null,coll);
var out__3018 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3017))))
{{
var G__3019 = cljs.core.rest.call(null,in$__3017);
var G__3020 = cljs.core.conj.call(null,out__3018,cljs.core.first.call(null,in$__3017));
in$__3017 = G__3019;
out__3018 = G__3020;
continue;
}
} else
{return out__3018;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3021 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____3022 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____3022))
{var e__3023 = temp__3723__auto____3022;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3023));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3021,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3016_SHARP_){
var temp__3723__auto____3024 = cljs.core.find.call(null,smap,p1__3016_SHARP_);

if(cljs.core.truth_(temp__3723__auto____3024))
{var e__3025 = temp__3723__auto____3024;

return cljs.core.second.call(null,e__3025);
} else
{return p1__3016_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3033 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3026,seen){
while(true){
var vec__3027__3028 = p__3026;
var f__3029 = cljs.core.nth.call(null,vec__3027__3028,0,null);
var xs__3030 = vec__3027__3028;

var temp__3726__auto____3031 = cljs.core.seq.call(null,xs__3030);

if(cljs.core.truth_(temp__3726__auto____3031))
{var s__3032 = temp__3726__auto____3031;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3029)))
{{
var G__3034 = cljs.core.rest.call(null,s__3032);
var G__3035 = seen;
p__3026 = G__3034;
seen = G__3035;
continue;
}
} else
{return cljs.core.cons.call(null,f__3029,step.call(null,cljs.core.rest.call(null,s__3032),cljs.core.conj.call(null,seen,f__3029)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3033.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3036 = cljs.core.Vector.fromArray([]);
var s__3037 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3037)))
{{
var G__3038 = cljs.core.conj.call(null,ret__3036,cljs.core.first.call(null,s__3037));
var G__3039 = cljs.core.next.call(null,s__3037);
ret__3036 = G__3038;
s__3037 = G__3039;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3036);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____3040 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3040))
{return or__3576__auto____3040;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3041 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3041,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3041));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____3042 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3042))
{return or__3576__auto____3042;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3043 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3043,-1)))
{return cljs.core.subs.call(null,x,2,i__3043);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3046 = cljs.core.ObjMap.fromObject([],{});
var ks__3047 = cljs.core.seq.call(null,keys);
var vs__3048 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3049 = ks__3047;

if(cljs.core.truth_(and__3574__auto____3049))
{return vs__3048;
} else
{return and__3574__auto____3049;
}
})()))
{{
var G__3050 = cljs.core.assoc.call(null,map__3046,cljs.core.first.call(null,ks__3047),cljs.core.first.call(null,vs__3048));
var G__3051 = cljs.core.next.call(null,ks__3047);
var G__3052 = cljs.core.next.call(null,vs__3048);
map__3046 = G__3050;
ks__3047 = G__3051;
vs__3048 = G__3052;
continue;
}
} else
{return map__3046;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3055 = (function (k,x){
return x;
});
var max_key__3056 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3057 = (function() { 
var G__3059__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3044_SHARP_,p2__3045_SHARP_){
return max_key.call(null,k,p1__3044_SHARP_,p2__3045_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3059 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3059__delegate.call(this, k, x, y, more);
};
G__3059.cljs$lang$maxFixedArity = 3;
G__3059.cljs$lang$applyTo = (function (arglist__3060){
var k = cljs.core.first(arglist__3060);
var x = cljs.core.first(cljs.core.next(arglist__3060));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3060)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3060)));
return G__3059__delegate.call(this, k, x, y, more);
});
return G__3059;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3055.call(this,k,x);
case  3 :
return max_key__3056.call(this,k,x,y);
default:
return max_key__3057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3057.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3061 = (function (k,x){
return x;
});
var min_key__3062 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3063 = (function() { 
var G__3065__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3053_SHARP_,p2__3054_SHARP_){
return min_key.call(null,k,p1__3053_SHARP_,p2__3054_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3065 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3065__delegate.call(this, k, x, y, more);
};
G__3065.cljs$lang$maxFixedArity = 3;
G__3065.cljs$lang$applyTo = (function (arglist__3066){
var k = cljs.core.first(arglist__3066);
var x = cljs.core.first(cljs.core.next(arglist__3066));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3066)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3066)));
return G__3065__delegate.call(this, k, x, y, more);
});
return G__3065;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3061.call(this,k,x);
case  3 :
return min_key__3062.call(this,k,x,y);
default:
return min_key__3063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3063.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3069 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3070 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3067))
{var s__3068 = temp__3726__auto____3067;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3068),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3068)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3069.call(this,n,step);
case  3 :
return partition_all__3070.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3072))
{var s__3073 = temp__3726__auto____3072;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3073))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3073),take_while.call(null,pred,cljs.core.rest.call(null,s__3073)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3074 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3075 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3076 = this;
return this__3076.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3077 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng)))))
{return (new cljs.core.Range(this__3077.meta,cljs.core._PLUS_.call(null,this__3077.start,this__3077.step),this__3077.end,this__3077.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3078 = this;
var comp__3079 = (cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3078.step))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3079.call(null,this__3078.start,this__3078.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3080 = this;
return (new cljs.core.Range(meta,this__3080.start,this__3080.end,this__3080.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3081 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3081.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3093 = null;
var G__3093__3094 = (function (rng,n){
var this__3082 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3082.start,cljs.core._STAR_.call(null,n,this__3082.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3083 = cljs.core._GT_.call(null,this__3082.start,this__3082.end);

if(cljs.core.truth_(and__3574__auto____3083))
{return cljs.core._EQ_.call(null,this__3082.step,0);
} else
{return and__3574__auto____3083;
}
})()))
{return this__3082.start;
} else
{throw "Index out of bounds";
}
}
});
var G__3093__3095 = (function (rng,n,not_found){
var this__3084 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3084.start,cljs.core._STAR_.call(null,n,this__3084.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3085 = cljs.core._GT_.call(null,this__3084.start,this__3084.end);

if(cljs.core.truth_(and__3574__auto____3085))
{return cljs.core._EQ_.call(null,this__3084.step,0);
} else
{return and__3574__auto____3085;
}
})()))
{return this__3084.start;
} else
{return not_found;
}
}
});
G__3093 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3093__3094.call(this,rng,n);
case  3 :
return G__3093__3095.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3093;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3086 = this;
return this__3086.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3097 = null;
var G__3097__3098 = (function (rng,f){
var this__3087 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3097__3099 = (function (rng,f,s){
var this__3088 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3097 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3097__3098.call(this,rng,f);
case  3 :
return G__3097__3099.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3097;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3089 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3090 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3091 = cljs.core._EQ_.call(null,this__3090.start,0);

if(cljs.core.truth_(and__3574__auto____3091))
{var and__3574__auto____3092 = cljs.core._LT_.call(null,this__3090.start,this__3090.end);

if(cljs.core.truth_(and__3574__auto____3092))
{return cljs.core._EQ_.call(null,this__3090.step,1);
} else
{return and__3574__auto____3092;
}
} else
{return and__3574__auto____3091;
}
})()))
{return cljs.core._.call(null,this__3090.end,this__3090.start);
} else
{if(cljs.core.truth_("﷐'else"))
{return Math['ceil'].call(null,cljs.core._SLASH_.call(null,cljs.core._.call(null,this__3090.end,this__3090.start),this__3090.step));
} else
{return null;
}
}
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3101 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3102 = (function (end){
return range.call(null,0,end,1);
});
var range__3103 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3104 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3101.call(this);
case  1 :
return range__3102.call(this,start);
case  2 :
return range__3103.call(this,start,end);
case  3 :
return range__3104.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3106 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3106))
{var s__3107 = temp__3726__auto____3106;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3107),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3107)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3109))
{var s__3110 = temp__3726__auto____3109;

var fst__3111 = cljs.core.first.call(null,s__3110);
var fv__3112 = f.call(null,fst__3111);
var run__3113 = cljs.core.cons.call(null,fst__3111,cljs.core.take_while.call(null,(function (p1__3108_SHARP_){
return cljs.core._EQ_.call(null,fv__3112,f.call(null,p1__3108_SHARP_));
}),cljs.core.next.call(null,s__3110)));

return cljs.core.cons.call(null,run__3113,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3113),s__3110))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3128 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3124 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3124))
{var s__3125 = temp__3723__auto____3124;

return reductions.call(null,f,cljs.core.first.call(null,s__3125),cljs.core.rest.call(null,s__3125));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3129 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3126 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3126))
{var s__3127 = temp__3726__auto____3126;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3127)),cljs.core.rest.call(null,s__3127));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3128.call(this,f,init);
case  3 :
return reductions__3129.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3132 = (function (f){
return (function() {
var G__3137 = null;
var G__3137__3138 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3137__3139 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3137__3140 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3137__3141 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3137__3142 = (function() { 
var G__3144__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3144 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3144__delegate.call(this, x, y, z, args);
};
G__3144.cljs$lang$maxFixedArity = 3;
G__3144.cljs$lang$applyTo = (function (arglist__3145){
var x = cljs.core.first(arglist__3145);
var y = cljs.core.first(cljs.core.next(arglist__3145));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3145)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3145)));
return G__3144__delegate.call(this, x, y, z, args);
});
return G__3144;
})()
;
G__3137 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3137__3138.call(this);
case  1 :
return G__3137__3139.call(this,x);
case  2 :
return G__3137__3140.call(this,x,y);
case  3 :
return G__3137__3141.call(this,x,y,z);
default:
return G__3137__3142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3137.cljs$lang$maxFixedArity = 3;
G__3137.cljs$lang$applyTo = G__3137__3142.cljs$lang$applyTo;
return G__3137;
})()
});
var juxt__3133 = (function (f,g){
return (function() {
var G__3146 = null;
var G__3146__3147 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3146__3148 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3146__3149 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3146__3150 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3146__3151 = (function() { 
var G__3153__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3153 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3153__delegate.call(this, x, y, z, args);
};
G__3153.cljs$lang$maxFixedArity = 3;
G__3153.cljs$lang$applyTo = (function (arglist__3154){
var x = cljs.core.first(arglist__3154);
var y = cljs.core.first(cljs.core.next(arglist__3154));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3154)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3154)));
return G__3153__delegate.call(this, x, y, z, args);
});
return G__3153;
})()
;
G__3146 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3146__3147.call(this);
case  1 :
return G__3146__3148.call(this,x);
case  2 :
return G__3146__3149.call(this,x,y);
case  3 :
return G__3146__3150.call(this,x,y,z);
default:
return G__3146__3151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3146.cljs$lang$maxFixedArity = 3;
G__3146.cljs$lang$applyTo = G__3146__3151.cljs$lang$applyTo;
return G__3146;
})()
});
var juxt__3134 = (function (f,g,h){
return (function() {
var G__3155 = null;
var G__3155__3156 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3155__3157 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3155__3158 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3155__3159 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3155__3160 = (function() { 
var G__3162__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3162 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3162__delegate.call(this, x, y, z, args);
};
G__3162.cljs$lang$maxFixedArity = 3;
G__3162.cljs$lang$applyTo = (function (arglist__3163){
var x = cljs.core.first(arglist__3163);
var y = cljs.core.first(cljs.core.next(arglist__3163));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3163)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3163)));
return G__3162__delegate.call(this, x, y, z, args);
});
return G__3162;
})()
;
G__3155 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3155__3156.call(this);
case  1 :
return G__3155__3157.call(this,x);
case  2 :
return G__3155__3158.call(this,x,y);
case  3 :
return G__3155__3159.call(this,x,y,z);
default:
return G__3155__3160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3155.cljs$lang$maxFixedArity = 3;
G__3155.cljs$lang$applyTo = G__3155__3160.cljs$lang$applyTo;
return G__3155;
})()
});
var juxt__3135 = (function() { 
var G__3164__delegate = function (f,g,h,fs){
var fs__3131 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3165 = null;
var G__3165__3166 = (function (){
return cljs.core.reduce.call(null,(function (p1__3114_SHARP_,p2__3115_SHARP_){
return cljs.core.conj.call(null,p1__3114_SHARP_,p2__3115_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3131);
});
var G__3165__3167 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3116_SHARP_,p2__3117_SHARP_){
return cljs.core.conj.call(null,p1__3116_SHARP_,p2__3117_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3131);
});
var G__3165__3168 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3118_SHARP_,p2__3119_SHARP_){
return cljs.core.conj.call(null,p1__3118_SHARP_,p2__3119_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3131);
});
var G__3165__3169 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3120_SHARP_,p2__3121_SHARP_){
return cljs.core.conj.call(null,p1__3120_SHARP_,p2__3121_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3131);
});
var G__3165__3170 = (function() { 
var G__3172__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3122_SHARP_,p2__3123_SHARP_){
return cljs.core.conj.call(null,p1__3122_SHARP_,cljs.core.apply.call(null,p2__3123_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3131);
};
var G__3172 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3172__delegate.call(this, x, y, z, args);
};
G__3172.cljs$lang$maxFixedArity = 3;
G__3172.cljs$lang$applyTo = (function (arglist__3173){
var x = cljs.core.first(arglist__3173);
var y = cljs.core.first(cljs.core.next(arglist__3173));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3173)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3173)));
return G__3172__delegate.call(this, x, y, z, args);
});
return G__3172;
})()
;
G__3165 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3165__3166.call(this);
case  1 :
return G__3165__3167.call(this,x);
case  2 :
return G__3165__3168.call(this,x,y);
case  3 :
return G__3165__3169.call(this,x,y,z);
default:
return G__3165__3170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3165.cljs$lang$maxFixedArity = 3;
G__3165.cljs$lang$applyTo = G__3165__3170.cljs$lang$applyTo;
return G__3165;
})()
};
var G__3164 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3164__delegate.call(this, f, g, h, fs);
};
G__3164.cljs$lang$maxFixedArity = 3;
G__3164.cljs$lang$applyTo = (function (arglist__3174){
var f = cljs.core.first(arglist__3174);
var g = cljs.core.first(cljs.core.next(arglist__3174));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3174)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3174)));
return G__3164__delegate.call(this, f, g, h, fs);
});
return G__3164;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3132.call(this,f);
case  2 :
return juxt__3133.call(this,f,g);
case  3 :
return juxt__3134.call(this,f,g,h);
default:
return juxt__3135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3135.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3176 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3179 = cljs.core.next.call(null,coll);
coll = G__3179;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3177 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3175 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3175))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3175;
}
})()))
{{
var G__3180 = cljs.core.dec.call(null,n);
var G__3181 = cljs.core.next.call(null,coll);
n = G__3180;
coll = G__3181;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3176.call(this,n);
case  2 :
return dorun__3177.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3182 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3183 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3182.call(this,n);
case  2 :
return doall__3183.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3185 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3185),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3185),1)))
{return cljs.core.first.call(null,matches__3185);
} else
{return cljs.core.vec.call(null,matches__3185);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3186 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3186)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3186),1)))
{return cljs.core.first.call(null,matches__3186);
} else
{return cljs.core.vec.call(null,matches__3186);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3187 = cljs.core.re_find.call(null,re,s);
var match_idx__3188 = s.search(re);
var match_str__3189 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3187))?cljs.core.first.call(null,match_data__3187):match_data__3187);
var post_match__3190 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3188,cljs.core.count.call(null,match_str__3189)));

if(cljs.core.truth_(match_data__3187))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3187,re_seq.call(null,re,post_match__3190));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3191_SHARP_){
return print_one.call(null,p1__3191_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3192 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3192))
{var and__3574__auto____3195 = (function (){var x__105__auto____3193 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3194 = x__105__auto____3193;

if(cljs.core.truth_(and__3574__auto____3194))
{return x__105__auto____3193.cljs$core$IMeta$;
} else
{return and__3574__auto____3194;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3193);
}
})();

if(cljs.core.truth_(and__3574__auto____3195))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3195;
}
} else
{return and__3574__auto____3192;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3196 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3197 = x__105__auto____3196;

if(cljs.core.truth_(and__3574__auto____3197))
{return x__105__auto____3196.cljs$core$IPrintable$;
} else
{return and__3574__auto____3197;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3196);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3198 = cljs.core.first.call(null,objs);
var sb__3199 = (new goog.string.StringBuffer());

var G__3200__3201 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3200__3201))
{var obj__3202 = cljs.core.first.call(null,G__3200__3201);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3202,first_obj__3198)))
{} else
{sb__3199.append(" ");
}
var G__3203__3204 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3202,opts));

while(true){
if(cljs.core.truth_(G__3203__3204))
{var string__3205 = cljs.core.first.call(null,G__3203__3204);

sb__3199.append(string__3205);
{
var G__3206 = cljs.core.next.call(null,G__3203__3204);
G__3203__3204 = G__3206;
continue;
}
} else
{}
break;
}
{
var G__3207 = cljs.core.next.call(null,G__3200__3201);
G__3200__3201 = G__3207;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3199);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3208 = cljs.core.first.call(null,objs);

var G__3209__3210 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3209__3210))
{var obj__3211 = cljs.core.first.call(null,G__3209__3210);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3211,first_obj__3208)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3212__3213 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3211,opts));

while(true){
if(cljs.core.truth_(G__3212__3213))
{var string__3214 = cljs.core.first.call(null,G__3212__3213);

cljs.core.string_print.call(null,string__3214);
{
var G__3215 = cljs.core.next.call(null,G__3212__3213);
G__3212__3213 = G__3215;
continue;
}
} else
{}
break;
}
{
var G__3216 = cljs.core.next.call(null,G__3209__3210);
G__3209__3210 = G__3216;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3217){
var objs = cljs.core.seq( arglist__3217 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3218){
var objs = cljs.core.seq( arglist__3218 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3219){
var objs = cljs.core.seq( arglist__3219 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3220){
var objs = cljs.core.seq( arglist__3220 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3221){
var objs = cljs.core.seq( arglist__3221 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3222 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3222,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3223 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3223))
{var nspc__3224 = temp__3726__auto____3223;

return cljs.core.str.call(null,nspc__3224,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3225 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3225))
{var nspc__3226 = temp__3726__auto____3225;

return cljs.core.str.call(null,nspc__3226,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3227 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3227,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3228 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3228.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3229 = this;
return this__3229.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3230 = this;
return this__3230.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3231 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3238 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3239 = (function() { 
var G__3241__delegate = function (x,p__3232){
var map__3233__3234 = p__3232;
var map__3233__3235 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3233__3234))?cljs.core.apply.call(null,cljs.core.hash_map,map__3233__3234):map__3233__3234);
var validator__3236 = cljs.core.get.call(null,map__3233__3235,"﷐'validator");
var meta__3237 = cljs.core.get.call(null,map__3233__3235,"﷐'meta");

return (new cljs.core.Atom(x,meta__3237,validator__3236));
};
var G__3241 = function (x,var_args){
var p__3232 = null;
if (goog.isDef(var_args)) {
  p__3232 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3241__delegate.call(this, x, p__3232);
};
G__3241.cljs$lang$maxFixedArity = 1;
G__3241.cljs$lang$applyTo = (function (arglist__3242){
var x = cljs.core.first(arglist__3242);
var p__3232 = cljs.core.rest(arglist__3242);
return G__3241__delegate.call(this, x, p__3232);
});
return G__3241;
})()
;
atom = function(x,var_args){
var p__3232 = var_args;
switch(arguments.length){
case  1 :
return atom__3238.call(this,x);
default:
return atom__3239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3239.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3243 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3243))
{var v__3244 = temp__3726__auto____3243;

if(cljs.core.truth_(v__3244.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3245 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3246 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3247 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3248 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3249 = (function() { 
var G__3251__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3251 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3251__delegate.call(this, a, f, x, y, z, more);
};
G__3251.cljs$lang$maxFixedArity = 5;
G__3251.cljs$lang$applyTo = (function (arglist__3252){
var a = cljs.core.first(arglist__3252);
var f = cljs.core.first(cljs.core.next(arglist__3252));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3252)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3252))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3252)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3252)))));
return G__3251__delegate.call(this, a, f, x, y, z, more);
});
return G__3251;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3245.call(this,a,f);
case  3 :
return swap_BANG___3246.call(this,a,f,x);
case  4 :
return swap_BANG___3247.call(this,a,f,x,y);
case  5 :
return swap_BANG___3248.call(this,a,f,x,y,z);
default:
return swap_BANG___3249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3249.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3253){
var iref = cljs.core.first(arglist__3253);
var f = cljs.core.first(cljs.core.next(arglist__3253));
var args = cljs.core.rest(cljs.core.next(arglist__3253));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3254 = (function (){
return gensym.call(null,"G__");
});
var gensym__3255 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3254.call(this);
case  1 :
return gensym__3255.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3257 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3257.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3258 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3258.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3258.state,this__3258.f);
}
return cljs.core.deref.call(null,this__3258.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3259){
var body = cljs.core.seq( arglist__3259 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3260__3261 = options;
var map__3260__3262 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3260__3261))?cljs.core.apply.call(null,cljs.core.hash_map,map__3260__3261):map__3260__3261);
var keywordize_keys__3263 = cljs.core.get.call(null,map__3260__3262,"﷐'keywordize-keys");
var keyfn__3264 = (cljs.core.truth_(keywordize_keys__3263)?cljs.core.keyword:cljs.core.str);
var f__3270 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3269 = (function iter__3265(s__3266){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3266__3267 = s__3266;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3266__3267)))
{var k__3268 = cljs.core.first.call(null,s__3266__3267);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3264.call(null,k__3268),thisfn.call(null,(x[k__3268]))]),iter__3265.call(null,cljs.core.rest.call(null,s__3266__3267)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3269.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3270.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3271){
var x = cljs.core.first(arglist__3271);
var options = cljs.core.rest(arglist__3271);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3272 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3276__delegate = function (args){
var temp__3723__auto____3273 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3272),args);

if(cljs.core.truth_(temp__3723__auto____3273))
{var v__3274 = temp__3723__auto____3273;

return v__3274;
} else
{var ret__3275 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3272,cljs.core.assoc,args,ret__3275);
return ret__3275;
}
};
var G__3276 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3276__delegate.call(this, args);
};
G__3276.cljs$lang$maxFixedArity = 0;
G__3276.cljs$lang$applyTo = (function (arglist__3277){
var args = cljs.core.seq( arglist__3277 );;
return G__3276__delegate.call(this, args);
});
return G__3276;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3279 = (function (f){
while(true){
var ret__3278 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3278)))
{{
var G__3282 = ret__3278;
f = G__3282;
continue;
}
} else
{return ret__3278;
}
break;
}
});
var trampoline__3280 = (function() { 
var G__3283__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3283 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3283__delegate.call(this, f, args);
};
G__3283.cljs$lang$maxFixedArity = 1;
G__3283.cljs$lang$applyTo = (function (arglist__3284){
var f = cljs.core.first(arglist__3284);
var args = cljs.core.rest(arglist__3284);
return G__3283__delegate.call(this, f, args);
});
return G__3283;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3279.call(this,f);
default:
return trampoline__3280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3280.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3285 = (function (){
return rand.call(null,1);
});
var rand__3286 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3285.call(this);
case  1 :
return rand__3286.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3288 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3288,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3288,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3297 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3298 = (function (h,child,parent){
var or__3576__auto____3289 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3289))
{return or__3576__auto____3289;
} else
{var or__3576__auto____3290 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3290))
{return or__3576__auto____3290;
} else
{var and__3574__auto____3291 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3291))
{var and__3574__auto____3292 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3292))
{var and__3574__auto____3293 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3293))
{var ret__3294 = true;
var i__3295 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3296 = cljs.core.not.call(null,ret__3294);

if(cljs.core.truth_(or__3576__auto____3296))
{return or__3576__auto____3296;
} else
{return cljs.core._EQ_.call(null,i__3295,cljs.core.count.call(null,parent));
}
})()))
{return ret__3294;
} else
{{
var G__3300 = isa_QMARK_.call(null,h,child.call(null,i__3295),parent.call(null,i__3295));
var G__3301 = cljs.core.inc.call(null,i__3295);
ret__3294 = G__3300;
i__3295 = G__3301;
continue;
}
}
break;
}
} else
{return and__3574__auto____3293;
}
} else
{return and__3574__auto____3292;
}
} else
{return and__3574__auto____3291;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3297.call(this,h,child);
case  3 :
return isa_QMARK___3298.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3302 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3303 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3302.call(this,h);
case  2 :
return parents__3303.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3305 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3306 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3305.call(this,h);
case  2 :
return ancestors__3306.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3308 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3309 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3308.call(this,h);
case  2 :
return descendants__3309.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3319 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3320 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3314 = "﷐'parents".call(null,h);
var td__3315 = "﷐'descendants".call(null,h);
var ta__3316 = "﷐'ancestors".call(null,h);
var tf__3317 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3318 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3314.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3316.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3316.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3314,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3317.call(null,"﷐'ancestors".call(null,h),tag,td__3315,parent,ta__3316),"﷐'descendants":tf__3317.call(null,"﷐'descendants".call(null,h),parent,ta__3316,tag,td__3315)});
})());

if(cljs.core.truth_(or__3576__auto____3318))
{return or__3576__auto____3318;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3319.call(this,h,tag);
case  3 :
return derive__3320.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3326 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3327 = (function (h,tag,parent){
var parentMap__3322 = "﷐'parents".call(null,h);
var childsParents__3323 = (cljs.core.truth_(parentMap__3322.call(null,tag))?cljs.core.disj.call(null,parentMap__3322.call(null,tag),parent):cljs.core.set([]));
var newParents__3324 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3323))?cljs.core.assoc.call(null,parentMap__3322,tag,childsParents__3323):cljs.core.dissoc.call(null,parentMap__3322,tag));
var deriv_seq__3325 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3311_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3311_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3311_SHARP_),cljs.core.second.call(null,p1__3311_SHARP_)));
}),cljs.core.seq.call(null,newParents__3324)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3322.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3312_SHARP_,p2__3313_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3312_SHARP_,p2__3313_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3325));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3326.call(this,h,tag);
case  3 :
return underive__3327.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3329 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3331 = (cljs.core.truth_((function (){var and__3574__auto____3330 = xprefs__3329;

if(cljs.core.truth_(and__3574__auto____3330))
{return xprefs__3329.call(null,y);
} else
{return and__3574__auto____3330;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3331))
{return or__3576__auto____3331;
} else
{var or__3576__auto____3333 = (function (){var ps__3332 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3332))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3332),prefer_table)))
{} else
{}
{
var G__3336 = cljs.core.rest.call(null,ps__3332);
ps__3332 = G__3336;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3333))
{return or__3576__auto____3333;
} else
{var or__3576__auto____3335 = (function (){var ps__3334 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3334))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3334),y,prefer_table)))
{} else
{}
{
var G__3337 = cljs.core.rest.call(null,ps__3334);
ps__3334 = G__3337;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3335))
{return or__3576__auto____3335;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3338 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3338))
{return or__3576__auto____3338;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3347 = cljs.core.reduce.call(null,(function (be,p__3339){
var vec__3340__3341 = p__3339;
var k__3342 = cljs.core.nth.call(null,vec__3340__3341,0,null);
var ___3343 = cljs.core.nth.call(null,vec__3340__3341,1,null);
var e__3344 = vec__3340__3341;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3342)))
{var be2__3346 = (cljs.core.truth_((function (){var or__3576__auto____3345 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3345))
{return or__3576__auto____3345;
} else
{return cljs.core.dominates.call(null,k__3342,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3344:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3346),k__3342,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3342," and ",cljs.core.first.call(null,be2__3346),", and neither is preferred");
}
return be2__3346;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3347))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3347));
return cljs.core.second.call(null,best_entry__3347);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3348 = mf;

if(cljs.core.truth_(and__3574__auto____3348))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3348;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3349 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3349))
{return or__3576__auto____3349;
} else
{var or__3576__auto____3350 = (_reset["_"]);

if(cljs.core.truth_(or__3576__auto____3350))
{return or__3576__auto____3350;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3351 = mf;

if(cljs.core.truth_(and__3574__auto____3351))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3351;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3352 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3352))
{return or__3576__auto____3352;
} else
{var or__3576__auto____3353 = (_add_method["_"]);

if(cljs.core.truth_(or__3576__auto____3353))
{return or__3576__auto____3353;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3354 = mf;

if(cljs.core.truth_(and__3574__auto____3354))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3354;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3355 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3355))
{return or__3576__auto____3355;
} else
{var or__3576__auto____3356 = (_remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____3356))
{return or__3576__auto____3356;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3357 = mf;

if(cljs.core.truth_(and__3574__auto____3357))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3357;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3358 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3358))
{return or__3576__auto____3358;
} else
{var or__3576__auto____3359 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____3359))
{return or__3576__auto____3359;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3360 = mf;

if(cljs.core.truth_(and__3574__auto____3360))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3360;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3361 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3361))
{return or__3576__auto____3361;
} else
{var or__3576__auto____3362 = (_get_method["_"]);

if(cljs.core.truth_(or__3576__auto____3362))
{return or__3576__auto____3362;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3363 = mf;

if(cljs.core.truth_(and__3574__auto____3363))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3363;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3364 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3364))
{return or__3576__auto____3364;
} else
{var or__3576__auto____3365 = (_methods["_"]);

if(cljs.core.truth_(or__3576__auto____3365))
{return or__3576__auto____3365;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3366 = mf;

if(cljs.core.truth_(and__3574__auto____3366))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3366;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3367 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3367))
{return or__3576__auto____3367;
} else
{var or__3576__auto____3368 = (_prefers["_"]);

if(cljs.core.truth_(or__3576__auto____3368))
{return or__3576__auto____3368;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3369 = mf;

if(cljs.core.truth_(and__3574__auto____3369))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3369;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3370 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3370))
{return or__3576__auto____3370;
} else
{var or__3576__auto____3371 = (_invoke["_"]);

if(cljs.core.truth_(or__3576__auto____3371))
{return or__3576__auto____3371;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3372 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3373 = cljs.core._get_method.call(null,mf,dispatch_val__3372);

if(cljs.core.truth_(target_fn__3373))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3372);
}
return cljs.core.apply.call(null,target_fn__3373,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3374 = this;
cljs.core.swap_BANG_.call(null,this__3374.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3374.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3374.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3374.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3375 = this;
cljs.core.swap_BANG_.call(null,this__3375.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3375.method_cache,this__3375.method_table,this__3375.cached_hierarchy,this__3375.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3376 = this;
cljs.core.swap_BANG_.call(null,this__3376.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3376.method_cache,this__3376.method_table,this__3376.cached_hierarchy,this__3376.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3377 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3377.cached_hierarchy),cljs.core.deref.call(null,this__3377.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3377.method_cache,this__3377.method_table,this__3377.cached_hierarchy,this__3377.hierarchy);
}
var temp__3723__auto____3378 = cljs.core.deref.call(null,this__3377.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3378))
{var target_fn__3379 = temp__3723__auto____3378;

return target_fn__3379;
} else
{var temp__3723__auto____3380 = cljs.core.find_and_cache_best_method.call(null,this__3377.name,dispatch_val,this__3377.hierarchy,this__3377.method_table,this__3377.prefer_table,this__3377.method_cache,this__3377.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3380))
{var target_fn__3381 = temp__3723__auto____3380;

return target_fn__3381;
} else
{return cljs.core.deref.call(null,this__3377.method_table).call(null,this__3377.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3382 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3382.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3382.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3382.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3382.method_cache,this__3382.method_table,this__3382.cached_hierarchy,this__3382.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3383 = this;
return cljs.core.deref.call(null,this__3383.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3384 = this;
return cljs.core.deref.call(null,this__3384.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3385 = this;
return cljs.core.do_invoke.call(null,mf,this__3385.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3386__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3386 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3386__delegate.call(this, _, args);
};
G__3386.cljs$lang$maxFixedArity = 1;
G__3386.cljs$lang$applyTo = (function (arglist__3387){
var _ = cljs.core.first(arglist__3387);
var args = cljs.core.rest(arglist__3387);
return G__3386__delegate.call(this, _, args);
});
return G__3386;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
