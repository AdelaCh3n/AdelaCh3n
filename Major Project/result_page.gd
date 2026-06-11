extends Node2D

var StartPage = "res://start_page.tscn"
var Game = "res://Game.tscn"


func _ready():
	$Person.load_code(Global.final_outfit)

func _on_home_pressed() -> void:
	Transition.change_scene(StartPage)


func _on_game_pressed() -> void:
	Transition.change_scene(Game)
