extends Node2D

var StartPage = "res://start_page.tscn"
var ResultPage = "res://result_page.tscn"

@onready var clothes = $clothes
@onready var code_input = $"../CodeInput"
@onready var code_label = $"../CodeLabel"
	
#wearing variable
@onready var hair = $"../Person/hair"
@onready var tops = $"../Person/tops"
@onready var bottoms = $"../Person/bottoms"
@onready var dresses = $"../Person/dresses"
@onready var socks = $"../Person/socks"
@onready var shoes = $"../Person/shoes"

@onready var preview1 = $clothes/wardrobe/save1/preview1
@onready var preview2 = $clothes/wardrobe/save2/preview2
@onready var preview3 = $clothes/wardrobe/save3/preview3
@onready var preview4 = $clothes/wardrobe/save4/preview4

@onready var previews = [
	preview1,
	preview2,
	preview3,
	preview4
]

func save_data():
	var file = FileAccess.open(
		"user://save.dat", FileAccess.WRITE
	)
	file.store_var(Global.saved_codes)
	
func load_data():
	if not FileAccess.file_exists("user://save.dat"):
		return
	var file = FileAccess.open(
		"user://save.dat", FileAccess.READ
	)
	var data = file.get_var()
	if data != null:
		Global.saved_codes = data
	

func _ready():
	hide_closet()
	await get_tree().process_frame
	if Global.current_outfit != "":
		$"../Person".load_code(Global.current_outfit)
	load_data()
	for i in range(4):
		if Global.saved_codes[i] == "":
			previews[i].visible = false
			
		else:
			previews[i].visible = true
			previews[i].load_code(Global.saved_codes[i])
			

	
func hide_closet(): #hide all the clothes(in closet) before started
	for c in clothes.get_children():
		c.visible = false

func show_clothes(index):#show clothes from the index(closet)
	for i in range(clothes.get_child_count()):
		var c = clothes.get_child(i)
		c.visible = (i == index)

func update_code():
	code_label.text = $"../Person".generate_code()


#closet button pressed
func _on_0_pressed() -> void:
	show_clothes(0);

func _on_1_pressed() -> void:
	show_clothes(1);

func _on_2_pressed() -> void:
	show_clothes(2);

func _on_3_pressed() -> void:
	show_clothes(3);

func _on_4_pressed() -> void:
	show_clothes(4);

func _on_5_pressed() -> void:
	show_clothes(5);

#clothes pressed
func _on_0a_pressed() -> void:
	$"../Person".wear_hair(0);
	update_code()

func _on_0b_pressed() -> void:
	$"../Person".wear_hair(1)
	update_code()

func _on_0c_pressed() -> void:
	$"../Person".wear_hair(2)
	update_code()

func _on_0d_pressed() -> void:
	$"../Person".wear_hair(3)
	update_code()


func _on_1a_pressed() -> void:
	$"../Person".wear_top(0);
	update_code()

func _on_1b_pressed() -> void:
	$"../Person".wear_top(1);
	update_code()

func _on_2a_pressed() -> void:
	$"../Person".wear_bottoms(0);
	update_code()

func _on_2b_pressed() -> void:
	$"../Person".wear_bottoms(1);
	update_code()

func _on_3a_pressed() -> void:
	$"../Person".wear_dresses(0);
	update_code()

func _on_3b_pressed() -> void:
	$"../Person".wear_dresses(1);
	update_code()

func _on_4a_pressed() -> void:
	$"../Person".wear_socks(0);
	update_code()

func _on_4b_pressed() -> void:
	$"../Person".wear_socks(1);
	update_code()
	
func _on_5a_pressed() -> void:
	$"../Person".wear_shoes(0);
	update_code()

func _on_5b_pressed() -> void:
	$"../Person".wear_shoes(1);
	update_code()

#ui
func _on_reset_pressed() -> void:
	$"../Person".wear_hair(-1);
	$"../Person".wear_top(-1);
	$"../Person".wear_bottoms(-1);
	$"../Person".wear_dresses(-1);
	$"../Person".wear_socks(-1);
	$"../Person".wear_shoes(-1);	

func _on_random_pressed() -> void:
	$"../Person".random_code()
	update_code()
	

func _on_load_button_pressed() -> void:
	var code = code_input.text 
	$"../Person".load_code(code)
	update_code()

func _on_home_pressed() -> void:
	Transition.change_scene(StartPage)


func _on_result_pressed() -> void:
	Global.final_outfit = $"../Person".generate_code()
	Global.current_outfit =  $"../Person".generate_code()
	print(Global.final_outfit)
	Transition.change_scene(ResultPage)


func _on_1c_pressed() -> void:
	$"../Person".wear_top(2)
	update_code()

func _on_2c_pressed() -> void:
	$"../Person".wear_bottoms(2)
	update_code()

func _on_5c_pressed() -> void:
	$"../Person".wear_shoes(2)
	update_code()


func load_wardrobe(save):

	if Global.saved_codes[save] == "":
		return

	$"../Person".load_code(Global.saved_codes[save])


func _on_wardrobe_pressed() -> void:
	show_clothes(6)


func _on_save_1_pressed() -> void:
	Global.saved_codes[0] = $"../Person".generate_code()
	preview1.load_code(Global.saved_codes[0])
	save_data()
	preview1.visible = true
	
func _on_save_2_pressed() -> void:
	Global.saved_codes[1] = $"../Person".generate_code()
	preview2.load_code(Global.saved_codes[1])
	save_data()
	preview2.visible = true

func _on_save_3_pressed() -> void:
	Global.saved_codes[2] = $"../Person".generate_code()
	preview3.load_code(Global.saved_codes[2])
	save_data()
	preview3.visible = true

func _on_save_4_pressed() -> void:
	Global.saved_codes[3] = $"../Person".generate_code()
	preview4.load_code(Global.saved_codes[3])
	save_data()
	preview4.visible = true


func _on_load_1_pressed() -> void:
	load_wardrobe(0)

func _on_load_2_pressed() -> void:
	load_wardrobe(1)

func _on_load_3_pressed() -> void:
	load_wardrobe(2)

func _on_load_4_pressed() -> void:
	load_wardrobe(3)


func delete_save(i):
	Global.saved_codes[i] = ""
	previews[i].visible = false
	save_data()

func _on_delete_1_pressed() -> void:
	delete_save(0)

func _on_delete_2_pressed() -> void:
		delete_save(1)


func _on_delete_3_pressed() -> void:
		delete_save(2)


func _on_delete_4_pressed() -> void:
		delete_save(3)
