game.PlayerEntity = me.ObjectEntity.extend({
    init:function(x, y, settings) {
        settings.image = "player1-spriteshhet";
        settings.spritewidth = "72";
        settings.spriteheight = "97";
        settings.width = 72;
        settings.height = 97;
        this.parent(x, y, settings);
        },
            
    update:function(deltaTime) {
            
    }
});
