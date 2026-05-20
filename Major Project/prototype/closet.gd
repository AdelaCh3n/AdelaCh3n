extends Node2D

var StartPage = "res://start_page.tscn"

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

#outfit code
var current_hair = -1 #not wearing
var current_tops = -1
var current_bottoms = -1
var current_dresses = -1
var current_socks = -1
var current_shoes = -1

var random_c = randi_range(-1,1)

var hair_total = 1;
var tops_total = 1;
var bottoms_total = 1;
var dresses_total = 1;
var socks_total = 1;
var shoes_total = 1;


func _ready():
	hide_closet()
	hide_wearing()
	

	
func hide_closet(): #hide all the clothes(in closet) before started
	for c in clothes.get_children():
		c.visible = false

func hide_wearing():#hide all the clothes(wearing) before started
	for h in hair.get_children():
		h.visible = false
	for t in tops.get_children():
		t.visible = false
	for b in bottoms.get_children():
		b.visible = false
	for d in dresses.get_children():
		d.visible = false
	for so in socks.get_children():
		so.visible = false
	for sh in shoes.get_children():
		sh.visible = false
		

func generate_code():
	return (
		index_to_code(current_hair)
		+index_to_code(current_tops)
		+index_to_code(current_bottoms)
		+index_to_code(current_dresses)
		+index_to_code(current_socks)
		+index_to_code(current_shoes)
	)

func update_code():
	code_label.text = generate_code()

func load_code(code):
	
	wear_hair(e_code(code[0]),false)
	wear_top(e_code(code[1]),false)
	wear_bottoms(e_code(code[2]),false)
	wear_dresses(e_code(code[3]),false)
	wear_socks(e_code(code[4]),false)
	wear_shoes(e_code(code[5]),false)
	
func e_code(index): #e means "not wearing"
	if index == "e":
		return -1
	return int(index)
	
func index_to_code(index):
	if index == -1:
		return "e"
		
	return str(index)

func random_code():
	current_hair = randi_range(-1,hair_total)
	current_socks = randi_range(-1,socks_total)
	current_shoes = randi_range(-1,shoes_total)
	var wear_seperate = randi_range(0,1)
	if wear_seperate == 1:
		current_dresses = -1
		hide_group(dresses)
		current_tops = randi_range(0,tops_total)
		current_bottoms = randi_range(0,bottoms_total)
	else:
		current_tops = -1
		current_bottoms = -1
		current_dresses = randi_range(0,dresses_total)

	hide_wearing()
	load_code(generate_code())


func show_clothes(index):#show clothes from the index
	for i in range(clothes.get_child_count()):
		var c = clothes.get_child(i)
		c.visible = (i == index)


func wear_hair(index, toggle = true):
	if toggle==true and current_hair == index:#click again to unwear
		current_hair = -1
		for h in hair.get_children():
			h.visible = false
		return
	current_hair = index
	for i in range(hair.get_child_count()):
		var h = hair.get_child(i)
		h.visible = (i == index)
	update_code()

func wear_top(index, toggle = true):
	hide_group(dresses)
	current_dresses = -1
	if toggle==true and current_tops == index:#click again to unwear
		current_tops = -1
		for t in tops.get_children():
			t.visible = false
		return
	current_tops = index
	for i in range(tops.get_child_count()):#click to wear
		var t = tops.get_child(i)
		t.visible = (i == index)
	update_code()
		
func wear_bottoms(index, toggle = true):
	hide_group(dresses)
	current_dresses = -1
	if toggle==true and current_bottoms == index:#click again to unwear
		current_bottoms = -1
		for b in bottoms.get_children():
			b.visible = false
		return
	current_bottoms = index
	for i in range(bottoms.get_child_count()):
		var b = bottoms.get_child(i)
		b.visible = (i == index)
	update_code()
	
		
func wear_dresses(index, toggle = true):
	if index == -1: 
		current_dresses = -1
		for d in dresses.get_children():
			d.visible = false
		return
	show_group(dresses)
	hide_group(tops)
	hide_group(bottoms)
	current_bottoms = -1
	current_tops = -1
	if toggle==true and current_dresses == index:#click again to unwear
		current_dresses = -1
		for d in dresses.get_children():
			d.visible = false
		return
	current_dresses = index
	for i in range(dresses.get_child_count()):
		var d = dresses.get_child(i)
		d.visible = (i == index)
	update_code()
		
func wear_socks(index, toggle = true):
	if toggle==true and current_socks == index:#click again to unwear
		current_socks = -1
		for so in socks.get_children():
			so.visible = false
		return
	current_socks = index
	for i in range(socks.get_child_count()):
		var so = socks.get_child(i)
		so.visible = (i == index)
	update_code()
		
func wear_shoes(index, toggle = true):
	if toggle==true and current_shoes == index:#click again to unwear
		current_shoes = -1
		for sh in tops.get_children():
			sh.visible = false
		return
	current_shoes = index
	for i in range(shoes.get_child_count()):
		var sh = shoes.get_child(i)
		sh.visible = (i == index)
	update_code()

func hide_group(group):
	for i in group.get_children():
		i.visible = false

func show_group(group):
	for i in group.get_children():
		i.visible = true

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
	wear_hair(0);
	update_code()

func _on_0b_pressed() -> void:
	wear_hair(1)
	update_code()

func _on_1a_pressed() -> void:
	wear_top(0);
	update_code()

func _on_1b_pressed() -> void:
	wear_top(1);
	update_code()

func _on_2a_pressed() -> void:
	wear_bottoms(0);
	update_code()

func _on_2b_pressed() -> void:
	wear_bottoms(1);
	update_code()

func _on_3a_pressed() -> void:
	wear_dresses(0);
	update_code()

func _on_3b_pressed() -> void:
	wear_dresses(1);
	update_code()

func _on_4a_pressed() -> void:
	wear_socks(0);
	update_code()

func _on_4b_pressed() -> void:
	wear_socks(1);
	update_code()
	
func _on_5a_pressed() -> void:
	wear_shoes(0);
	update_code()

func _on_5b_pressed() -> void:
	wear_shoes(1);
	update_code()

#ui
func _on_reset_pressed() -> void:
	wear_hair(-1);
	wear_top(-1);
	wear_bottoms(-1);
	wear_dresses(-1);
	wear_socks(-1);
	wear_shoes(-1);	

func _on_random_pressed() -> void:
	random_code()

func _on_load_button_pressed() -> void:
	var code = code_input.text 
	load_code(code)

func _on_home_pressed() -> void:
	Transition.change_scene(StartPage)
