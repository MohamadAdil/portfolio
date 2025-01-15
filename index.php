<?php include 'header.php'; ?>
<!--  -->
<section class="hero-banner" style="background-image: url(./images/hero-banner.webp);">
    <div class="container">
        <div class="heading-wrap">
            <h1>Hi, I'm Mohamad Adil</h1>
            <p>Front-End Developer & Web Designer | Crafting Modern, Responsive, and Intuitive Websites</p>
            <a href="./portfolio.php" class="btn-main">View My Work</a>
        </div>
    </div>
</section>
<!--  -->
<section class="rec-projects">
    <div class="container">
        <div class="heading-wrap">
            <h2>Our Recent Projects</h2>
        </div>

        <?php
        // Connect to the database
        include('db-connection.php');

        // Fetch only the first 8 projects from the database
        $query = "SELECT * FROM projects LIMIT 8"; // Limit to 8 projects
        $result = mysqli_query($conn, $query);
        ?>

        <div class="row g-4">
            <?php while ($project = mysqli_fetch_assoc($result)): ?>
                <div class="col-lg-3">
                    <a href="project-detail.php?id=<?php echo $project['id']; ?>">
                        <div class="pro-card">
                            <img src="./images/<?php echo $project['image']; ?>" class="card-img-top" alt="Project Image">
                            <div class="pro-card-body">
                                <h5><?php echo $project['title']; ?></h5>
                                <p><?php echo substr($project['description'], 0, 100); ?>...</p>
                            </div>
                        </div>
                    </a>
                </div>
            <?php endwhile; ?>
        </div>

        <div class="button-wrap mt-5 text-center">
            <a href="./portfolio.php" class="btn-main">Explore All</a>
        </div>
    </div>
</section>
<!--  -->
<section class="tech-se">
    <div class="container">
        <h2 class="text-center mb-5">Technologies We Use</h2>
        <div class="row text-center">
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- WordPress Icon -->
                    <i class="fab fa-wordpress"></i>
                </div>
                <p>WordPress</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- Elementor Icon -->
                    <i class="fab fa-elementor"></i>
                </div>
                <p>Elementor</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- Webflow Icon -->
                    <i class="fab fa-webflow"></i>
                </div>
                <p>Webflow</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- HTML Icon -->
                    <i class="fab fa-html5"></i>
                </div>
                <p>HTML</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- CSS Icon -->
                    <i class="fab fa-css3-alt"></i>
                </div>
                <p>CSS</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- JavaScript Icon -->
                    <i class="fab fa-js"></i>
                </div>
                <p>JavaScript</p>
            </div>

            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- jQuery Icon -->
                    <i class="fab fa-js-square"></i>
                </div>
                <p>jQuery</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- Shopify Icon -->
                    <i class="fab fa-shopify"></i>
                </div>
                <p>Shopify</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- Figma Icon -->
                    <i class="fab fa-figma"></i>
                </div>
                <p>Figma</p>
            </div>
            <!-- <div class="col-lg-3 mb-3">
        <div class="tech-icon">
          <i class="fab fa-adobe"></i>
        </div>
        <p>Photoshop</p>
      </div> -->
        </div>
    </div>
</section>

<!--  -->
<?php include 'footer.php'; ?>