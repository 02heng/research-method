// 示例数据
const paperData = [
    {
        title: "Optimizing waste handling with interactive AI: Prompt-guided segmentation of construction and demolition waste using computer vision",
        authors: "Diani Sirimewan, Nilakshan Kunananthaseelan, Sudharshan Raman, Reyes Garcia, Mehrdad Arashpour",
        year: 2024,
        doi: "10.1016/j.wasman.2024.09.018",
        tool: "GPT",
        address:"1-s2.0-S0956053X24005051-main"
    },
    {
        title: "Game changers:A generative AI prompt protocol to enhance human-AI knowledge co-construction",
        authors: "Jeandri Robertson, Caitlin Ferreira, Elsamari Botha, Kim Oosthuizen",
        year: 2023,
        doi: "10.1016/j.bushor.2024.04.008",
        tool: "None",
        address: "1-s2.0-S0007681324000533-main"
    },
    {
        title: "Artificial intelligence prompt engineering as a new digital competence: Analysis of generative AI technologies such as ChatGP",
        authors: "Korzynski P , Mazurek G , Krzypkowska P ,et",
        year: 2024,
        doi: "10.15678/EBER.2023.110302",
        tool: "Suno",
        address: "1-s2.0-S0261517724000906-main"
    },
    {
        title: "The First Generative AI Prompt-A-Thon in Healthcare: A Novel Approach to Workforce Engagement with a Private Instance of ChatGPT",
        authors: "Small WR, Malhotra K, Major VJ, Wiesenfeld sB, Lewis M, Grover H, Tang H, Banerjee A, Jabbour MJ, Aphinyanaphongs Y, Testa P, Austrian JS.",
        year: 2024,
        doi: "10.1371/journal.pdig.0000394",
        tool: "LangChain",
        address: "1-s2.0-S2212827124007510-main(1)"
    },
    {
        title: "How AI awareness can prompt service performance adaptivity and technologically-environmental mastery",
        authors: "Ziying Mo, Matthew Tingchi Liu, Yu Ma",
        year: 2024,
        doi: "10.1016/j.tourman.2024.104971",
        tool: "ChatGPT",
        address:"araújo-saúde-2024-can-chatgpt-enhance-chemistry-laboratory-teaching-using-prompt-engineering-to-enable-ai-in-generating"
    },
    {
        title: "Leveraging Generative AI Prompt Programming for Human-Robot Collaborative Assembly",
        authors: "]Christos Konstantinou, Dimitris Antonarakos, Panagiotis Angelakis, Christos Gkournelos, George Michalos, Sotiris Makris",
        year: 2024,
        doi: "10.1016/j.procir.2024.03.040",
        tool: "ROS",
        address:"Artificial_intelligence_prompt"
    },
    {
        title: "Can ChatGPT Enhance Chemistry Laboratory ",
        authors: "JOUR,Can ChatGPT Enhance Chemistry Laboratory Te,Araújo, José Luís,Saúde, Isabel",
        year: 2024,
        doi: " 10.1021/acs.jchemed.3c00745",
        tool: "Microsoft Azure OpenAI",
        address:"main"
    },{
        title: "A novel dataset of text-prompt based AI-generated music with emotion annotations",
        authors: "M. Civit, V. Drai-Zerbib, D. Lizcano, M.J. Escalona",
        year: 2023,
        doi: "10.1016/j.dib.2024.110743",
        tool: "None",
        address:"pdig.0000394"
    },
    {
        title: "Engineering Answers Honing Your AI Prompts for More Effective Results",
        authors: "Talarico, Donna",
        year: 2023,
        doi: "10.1002/nsr.31064",
        tool: "None",
        address:"Recru   Retain Adult Learner - 2023 - Talarico - Engineering answers  Honing your AI prompts for more effective results"
    },
    {
        title: "A survey on hallucination in large language models",
        authors: "hang, Y., Li, Y., Cui, L., Cai, D., Liu, L., Fu, T., Huang, X., Zhao, E., Zhang, Y., Chen, Y., Wang, L., Luu, A. T., Bi, W., Shi, F., & Shi, S.",
        year: 2024,
        doi: "10.48550/arxiv.2309.01219",
        tool: "ChatGPT",
        address:"survey1"
    }
];

// 初始化年份直方图
function initYearChart() {
    const ctx = document.getElementById('yearChart').getContext('2d');
    const years = paperData.map(paper => paper.year);
    const yearCounts = {};
    years.forEach(year => {
        yearCounts[year] = (yearCounts[year] || 0) + 1;
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(yearCounts),
            datasets: [{
                label: 'Papers per Year',
                data: Object.values(yearCounts),
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }]
        }
    });
}

// 初始化工具使用直方图
function initToolChart() {
    const ctx = document.getElementById('toolChart').getContext('2d');
    const tools = paperData.map(paper => paper.tool);
    const toolCounts = {};
    tools.forEach(tool => {
        toolCounts[tool] = (toolCounts[tool] || 0) + 1;
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(toolCounts),
            datasets: [{
                label: 'AI Tools Usage',
                data: Object.values(toolCounts),
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        }
    });
}

// 渲染论文卡片
function renderPaperCards() {
    const papersList = document.getElementById('papersList');
    paperData.forEach(paper => {
        const card = createPaperCard(paper);
        papersList.appendChild(card);
    });
}

function createPaperCard(paper) {
    const paperCard = document.createElement('div');
    paperCard.className = 'paper-card';

    const title = document.createElement('div');
    title.className = 'paper-title';
    title.textContent = paper.title;
    
    // 添加点击事件
    title.addEventListener('click', () => {
        // 构建PDF文件路径（假设文件名与论文标题相关）
        const pdfFileName = `${paper.address}.pdf`;
        const pdfPath = `./paperPdf/${pdfFileName}`;
        
        // 在新窗口打开PDF
        window.open(pdfPath, '_blank');
    });

    const authors = document.createElement('div');
    authors.className = 'paper-authors';
    authors.textContent = paper.authors;

    const year = document.createElement('div');
    year.className = 'paper-year';
    year.textContent = `Year: ${paper.year}`;

    const doi = document.createElement('a');
    doi.className = 'paper-doi';
    doi.href = `https://doi.org/${paper.doi}`;
    doi.target = '_blank';
    doi.textContent = `DOI: ${paper.doi}`;

    paperCard.appendChild(title);
    paperCard.appendChild(authors);
    paperCard.appendChild(year);
    paperCard.appendChild(doi);

    return paperCard;
}

// 绘制词云图
function drawWordCloud() {
    const canvas = document.getElementById('cloudChart');
    const ctx = canvas.getContext('2d');
    
    // 创建图片对象
    const img = new Image();
    img.src = 'cloud.png';
    
    // 图片加载完成后绘制
    img.onload = function() {
        // 设置canvas大小与容器相适应
        canvas.width = canvas.parentElement.clientWidth - 30; // 减去padding
        canvas.height = 300; // 设置固定高度或根据需要调整
        
        // 保持图片纵横比例绘制
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;
        
        // 清除画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制图片
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
    
    // 错误处理
    img.onerror = function() {
        console.error('Error loading word cloud image');
    };
}

// 页面加载时初始化
window.addEventListener('load', () => {
    initYearChart();
    initToolChart();
    renderPaperCards();
    drawWordCloud();
});

// 窗口大小改变时重新绘制
window.addEventListener('resize', drawWordCloud);