/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";

$.uploadPreview({
    input_field: "#image-upload",
    preview_box: "#image-preview",
    label_field: "#image-label",
    label_default: "选择文件",
    label_selected: "更换文件",
    no_label: false,
    success_callback: null
});


$('.logout').click(function() {
    $.ajax({
        url: "/admin/auth/logout",
        method: 'post',
        data: {type: 'logout'},
        dataType: 'json',
        success(res) {
            location.reload();
        }
    })
})
