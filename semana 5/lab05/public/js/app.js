$(document).ready(function() {
	var socket = io();
	socket.on('nuevo', function(data) {
		fill(data);
	});
	var fill = function(data) {
		if ($('#' + data._id).length == 0) {
			var $row = $('<tr id="' + data._id + '">');
			$row.append('<td>' + data._id + '</td>');
			$row.append('<td>' + data.first_name + '</td>');
			$row.append('<td>' + data.last_name + '</td>');
			$row.append('<td>' + data.timezone + '</td>');
			$row.append('<td>' + data.locale + '</td>');
			$row.append('<td>' + data.profile_pic + '</td>');
			$row.append(
				'<td><button class="btn btn-success btn-sm" name="btnAct">Actualizar</button></td></td>'
			);
			$row.append(
				'<td><button class="btn btn-danger btn-sm" name="btnEli">Eliminar</button></td>'
			);
			$row.data('data', data);
			$row.find('[name=btnAct]').click(function() {
				var _id = $(this)
					.closest('tr')
					.attr('id');
				if (confirm('Continuar con eliminacion de registro?')) {
					socket.emit('eliminar', _id);
				}
			});
			$('table tbody').append($row);
		} else {
			var $row = $('#' + data._id);
			$row.find('td:eq(1)').html(data.first_name);
			$row.find('td:eq(2)').html(data.last_name);
			$row.find('td:eq(3)').html(data.timezone);
			$row.find('td:eq(4)').html(data.locale);
			$row.find('td:eq(5)').html(data.profile_pic);
		}
	};
	$('#formulario').submit(function(e) {
		e.preventDefault();
		var data = {
			_id: $('#_id').val(),
			first_name: $('#first_name').val(),
			last_name: $('#last_name').val(),
			timezone: $('#timezone').val(),
			locale: $('#locale').val(),
			profile_pic: $('#profile_pic').val()
		};
		if (data._id == '') {
			$('#_id').focus();
			return alert('Debe ingresar un ID!');
		}
		if (data.first_name == '') {
			$('#first_name').focus();
			return alert('Debe ingresar un nombre!');
		}
		var accion = 'crear';
		if ($('.warning').length > 0) accion = 'actualizar';
		$('.warning').removeClass('warning');
		socket.emit(accion, data);
		$('#formulario').trigger('reset');
		return true;
	});
	socket.on('listar', function(data) {
		data = JSON.parse(data);
		for (var i = 0, j = data.length; i < j; i++) {
			fill(data[i]);
		}
	});
	socket.on('borrado', function(data) {
		$('#' + data).remove();
	});
});