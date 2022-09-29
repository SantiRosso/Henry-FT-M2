var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  // if (typeof startEl === "undefined") {
  //   startEl = document.body;
  // }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
    if(matchFunc(startEl)) resultSet.push(startEl);

    for (let i = 0; i < startEl.children.length; i++) {
      let elementos = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
      resultSet = [...resultSet, ...elementos];
    }
    return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  return selector[0] === '#' ? 'id' : selector[0] === '.' ? 'class' : selector.split('.').length > 1 ? 'tag.class' : 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    // matchFunction = function(elemento){
    //   if(selector === '#' + elemento.id) return true;
    //   else return false;
    // }
    
    matchFunction = (elemento) => `#${elemento.id}` === selector ? true : false;

  } else if (selectorType === "class") {
      matchFunction = (elemento) => {
        let classes = elemento.classList
        for(let i = 0; i < classes.length; i++){
          if('.' + classes[i] === selector) return true;
        } 
        return false;
    }
  } else if (selectorType === "tag.class") {
      matchFunction = (elemento) => {
        let [tag, clase] = selector.split('.');
        return matchFunctionMaker(tag)(elemento) && matchFunctionMaker(`.${clase}`)(elemento);
      }
  } else if (selectorType === "tag") {
      matchFunction = (elemento) => elemento.tagName.toLowerCase() === selector ? true : false;
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
