let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
        document.getElementById('text-info').style.display = 'none';
        document.getElementById('text-info-2').style.display = 'none';
        document.getElementById('text-info-3').style.display = 'none';
        document.getElementById('text-info-4').style.display = 'none';
    },
    // Health, Mana, Strength, Agility, Speed
    resetPlayer: function(classType) {
        switch (classType) {
            case "Joker":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Khalifa":
                player = new Player(classType, 100, 50, 100, 50, 30);
                break;
            case "Gantus":
                player = new Player(classType, 300, 0, 250, 200, 50);
                break;
            case "Chaos":
                player = new Player(classType, 150, 0, 50, 200, 200);
                break;
            case "Hoodini":
                player = new Player(classType, 150, 300, 10, 200, 150);
                break;
            case "Van Cuba":
                player = new Player(classType, 130, 150, 50, 100, 100);
                break;
            case "Wrazzix":
                player = new Player(classType, 300, 0, 300, 200, 100);
                break;
            case "Mongen":
                player = new Player(classType, 400, 150, 300, 150, 90);
                break;
            case "Opriser":
                player = new Player(classType, 200, 100, 100, 100, 100);
                break;
            case "Ven":
                player = new Player(classType, 150, 100, 150, 200, 100);
                break;
            case "Kami":
                player = new Player(classType, 150, 150, 150, 200, 100);
                break;
            case "Shinblade":
                player = new Player(classType, 200, 0, 250, 200, 150);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = `
            <img src="img/avatar-player/${classType.toLowerCase()}.png" alt="" class="img-avatar">
            <div>
                <h3>${classType}</h3>
                <p class="health-player">Health: ${player.health}</p>
                <p>Mana: ${player.mana}</p>
                <p>Strength: ${player.strength}</p>
                <p>Agility: ${player.agility}</p>
                <p>Speed: ${player.speed}</p>
            </div>`;
    },

    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = "<p>Task: Find an enemy!</p>";
        getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>`;
        getArena.style.visibility = "visible";
    },

    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
    
        // All possible enemies
        let enemies = [
            new Enemy("Joker", 200, 0, 200, 100, 50),
            new Enemy("Khalifa", 100, 50, 100, 50, 30),
            new Enemy("Gantus", 300, 0, 250, 200, 50),
            new Enemy("Chaos", 150, 0, 50, 200, 200),
            new Enemy("Hoodini", 150, 300, 10, 200, 150),
            new Enemy("Van Cuba", 130, 150, 50, 100, 100),
            new Enemy("Wrazzix", 300, 0, 300, 200, 100),
            new Enemy("Mongen", 400, 150, 300, 150, 90),
            new Enemy("Opriser", 200, 100, 100, 100, 100),
            new Enemy("Ven", 150, 100, 150, 200, 100),
            new Enemy("Kami", 50, 150, 150, 200, 100),
            new Enemy("Shinblade", 200, 0, 250, 200, 150)
        ];
    
        // Remove the player from possible enemies
        let possibleEnemies = enemies.filter(e => e.enemyType !== player.classType);
    
        // Pick a random enemy
        let chooseRandomEnemy = Math.floor(Math.random() * possibleEnemies.length);
        enemy = possibleEnemies[chooseRandomEnemy];
    
        // Update interface
        getHeader.innerHTML = "<p>Task: Choose your move!</p>";
        getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>`;
        getEnemy.innerHTML = `
            <img src="img/avatar-enemies/${enemy.enemyType.toLowerCase()}.png" alt="${enemy.enemyType}" class="img-avatar">
            <div>
                <h3>${enemy.enemyType}</h3>
                <p class="health-enemy">Health: ${enemy.health}</p>
                <p>Mana: ${enemy.mana}</p>
                <p>Strength: ${enemy.strength}</p>
                <p>Agility: ${enemy.agility}</p>
                <p>Speed: ${enemy.speed}</p>
            </div>`;
    }
    
};

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function() {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = this.attack(player);
            enemy.health -= playerAttackValues.totalDamage;
            alert(`You hit ${playerAttackValues.damage} damage ${playerAttackValues.hits} times.`);
            if (enemy.health <= 0) {
                alert("You win! Refresh the browser to play again.");
                getEnemyHealth.innerHTML = "Health: 0";
                return;
            } else {
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
            }
            this.enemyAttack(getPlayerHealth);
        } else {
            this.enemyAttack(getPlayerHealth);
            if (player.health > 0) this.attack(enemy);
        }
    },

    attack: function(attacker) {
        let damage = (attacker.mana > 0) ? attacker.strength * attacker.mana / 1000 : attacker.strength * attacker.agility / 1000;
        let offset = Math.floor(Math.random() * 10);
        let totalDamage = damage + offset;
        let hits = Math.floor(Math.random() * Math.floor(attacker.agility / 10) / 2) + 1;
        return { totalDamage: totalDamage * hits, damage: totalDamage, hits };
    },

    enemyAttack: function(getPlayerHealth) {
        let enemyAttackValues = this.attack(enemy);
        player.health -= enemyAttackValues.totalDamage;
        alert(`Enemy hit ${enemyAttackValues.damage} damage ${enemyAttackValues.hits} times.`);
        if (player.health <= 0) {
            alert("You lose! Refresh the browser to play again.");
            getPlayerHealth.innerHTML = "Health: 0";
        } else {
            getPlayerHealth.innerHTML = "Health: " + player.health;
        }
    }
};

function Enemy(enemyType, health, mana, strength, agility, speed) {
    this.enemyType = enemyType;  // Corrected line
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

