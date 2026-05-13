extends Node2D


@onready var clothes = $clothes

@onready var hair = $"../Person/hair"
@onready var tops = $"../Person/tops"
@onready var buttoms = $"../Person/bottoms"
@onready var dresses = $"../Person/dresses"
@onready var socks = $"../Person/socks"
@onready var shoes = $"../Person/shoes"

func _ready():
	hide_all()
	no_wear()
	print(hair)
	print(tops)
	print(buttoms)
	print(dresses)
	print(socks)
	print(shoes)
	
func hide_all():
	for c in clothes.get_children():
		c.visible = false

func no_wear():
	for h in hair.get_children():
		h.visible = false
	for t in tops.get_children():
		t.visible = false
	for b in buttoms.get_children():
		b.visible = false
	for d in dresses.get_children():
		d.visible = false
	for so in socks.get_children():
		so.visible = false
	for sh in shoes.get_children():
		sh.visible = false
		

func show_clothes(index):
	for i in range(clothes.get_child_count()):
		var c = clothes.get_child(i)
		c.visible = (i == index)
		
func wear_hair(index):
	for i in range(hair.get_child_count()):
		var h = hair.get_child(i)
		h.visible = (i == index)

func wear_top(index):
	for i in range(tops.get_child_count()):
		var t = tops.get_child(i)
		t.visible = (i == index)
		
func wear_bottoms(index):
	for i in range(buttoms.get_child_count()):
		var b = buttoms.get_child(i)
		b.visible = (i == index)
		
func wear_dresses(index):
	for i in range(dresses.get_child_count()):
		var d = dresses.get_child(i)
		d.visible = (i == index)
		
func wear_socks(index):
	for i in range(socks.get_child_count()):
		var so = socks.get_child(i)
		so.visible = (i == index)
		
func wear_shoes(index):
	for i in range(shoes.get_child_count()):
		var sh = shoes.get_child(i)
		sh.visible = (i == index)


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


func _on_0a_pressed() -> void:
	wear_hair(0);


func _on_0b_pressed() -> void:
	wear_hair(1);
