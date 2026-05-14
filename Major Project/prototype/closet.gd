extends Node2D


@onready var clothes = $clothes

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
		

func show_clothes(index):#show clothes from the index
	for i in range(clothes.get_child_count()):
		var c = clothes.get_child(i)
		c.visible = (i == index)
		
func wear_hair(index):
	if current_hair == index:#click again to unwear
		current_hair = -1
		for h in hair.get_children():
			h.visible = false
		return
	current_hair = index
	for i in range(hair.get_child_count()):
		var h = hair.get_child(i)
		h.visible = (i == index)

func wear_top(index):
	hide_group(dresses)
	if current_tops == index:#click again to unwear
		current_tops = -1
		for t in tops.get_children():
			t.visible = false
		return
	current_tops = index
	for i in range(tops.get_child_count()):#click to wear
		var t = tops.get_child(i)
		t.visible = (i == index)
		
func wear_bottoms(index):
	hide_group(dresses)
	if current_bottoms == index:#click again to unwear
		current_bottoms = -1
		for b in bottoms.get_children():
			b.visible = false
		return
	current_bottoms = index
	for i in range(bottoms.get_child_count()):
		var b = bottoms.get_child(i)
		b.visible = (i == index)
		
func wear_dresses(index):
	hide_group(tops)
	hide_group(bottoms)
	if current_dresses == index:#click again to unwear
		current_dresses = -1
		for d in dresses.get_children():
			d.visible = false
		return
	current_dresses = index
	for i in range(dresses.get_child_count()):
		var d = dresses.get_child(i)
		d.visible = (i == index)
		
func wear_socks(index):
	if current_socks == index:#click again to unwear
		current_socks = -1
		for so in socks.get_children():
			so.visible = false
		return
	current_socks = index
	for i in range(socks.get_child_count()):
		var so = socks.get_child(i)
		so.visible = (i == index)
		
func wear_shoes(index):
	if current_shoes == index:#click again to unwear
		current_shoes = -1
		for sh in tops.get_children():
			sh.visible = false
		return
	current_shoes = index
	for i in range(shoes.get_child_count()):
		var sh = shoes.get_child(i)
		sh.visible = (i == index)

func hide_group(group):
	for i in group.get_children():
		i.visible = false

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
	wear_hair(1)


func _on_1a_pressed() -> void:
	wear_top(0);


func _on_1b_pressed() -> void:
	wear_top(1);


func _on_2a_pressed() -> void:
	wear_bottoms(0);


func _on_2b_pressed() -> void:
	wear_bottoms(1);


func _on_3a_pressed() -> void:
	wear_dresses(0);

func _on_3b_pressed() -> void:
	wear_dresses(1);

func _on_4a_pressed() -> void:
	wear_socks(0);

func _on_4b_pressed() -> void:
	wear_socks(1);
	
func _on_5a_pressed() -> void:
	wear_shoes(0);

func _on_5b_pressed() -> void:
	wear_shoes(1);
