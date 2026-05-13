extends CanvasLayer

@onready var fading = $fading

var tween: Tween

func _ready() -> void:
	pass


func fade_in():
	var tween =create_tween()
	tween.tween_property(fading, "modulate:a", 1.0, 0.5)
	await tween.finished


func fade_out():
	var tween = create_tween()
	tween.tween_property(fading, "modulate:a", 0.0, 0.5)
	await tween.finished
	

func change_scene(path):

	await fade_in()
	get_tree().change_scene_to_file(path)
	await fade_out()
