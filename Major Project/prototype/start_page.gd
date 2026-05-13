extends Control


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.

var Game = "res://Game.tscn" #preload the game scene


func _on_start_button_pressed() -> void:
	Transition.change_scene(Game)
	
