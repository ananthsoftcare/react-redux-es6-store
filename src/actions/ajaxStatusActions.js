import * as types from './actionTypes';

export function beginAjaxCall(courses) {
  return {type : types.BEGIN_AJAX_CALL, courses};
}

export function ajaxCallError() {
  return {type : types.AJAX_CALL_ERROR};
}
