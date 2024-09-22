function alohaId() {

  //? Verifica se o elemento data-aloha-id existe
  if ($('[data-aloha-id]').length == 0) {
    console.error('O elemento data-aloha-id não foi encontrado.');
    return;
  }

  //? Verifica se já existe o elemento aloha-id
  if ($('#aloha-id').length == 0) {

    //? Adiciona o SDK
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/libs/sdk-biopass/sdk-biopass.js';
    document.head.appendChild(script);
  
    //* Cria a div para o SDK
    alohaIdElement = document.createElement('div');
    alohaIdElement.id = 'aloha-id';
    alohaIdElement.style.display = 'none';
    
    document.body.appendChild(alohaIdElement);

    //* adiciona um input no body para receber a imagem como value
    input = document.createElement('input');
    input.type = 'hidden';
    input.id = 'aloha-id-img';
    document.body.appendChild(input);

  }

  $('#aloha-id-img').val('');

  //* Chama a função para ativar a câmera
  $('[data-aloha-id]').click(function() {

    //? Esconde o modal-backdrop se existir
    if ($('.modal-backdrop').length > 0) {
      $('.modal-backdrop').css('display', 'none');
    };

    $('main').css('display', 'none');
    $('#aloha-id').css('display', 'block');

    handleTakePicture();
  });

  //? Função para ativar a câmera
  async function handleTakePicture() {

    //* Define se o SDK vai fazer a detecção de face
    const detection = true;

    if (detection) {
      adapter = faceSdk.faceDetectionAdapter;
      message = '<i class="fas fa-spinner fa-spin fa-lg"></i>';
    }else {
      adapter = null;
      message = "Centralize seu rosto";
    }

    await faceSdk.loadFaceDetectorModels('/libs/sdk-biopass/models');

    const resp = await faceSdk.camera().takePicture({
      element: document.querySelector("#aloha-id"),
      faceDetectionAdapter: adapter,
      i18n: {
        noFacesDetected: "Nenhuma face detectada",
        multipleFacesDetected: "Multiplas faces detectadas",
        moveFaceLeft: "Mova o rosto para a esquerda",
        moveFaceRight: "Mova o rosto para a direita",
        moveFaceUp: "Mova o rosto para cima",
        moveFaceDown: "Mova o rosto para baixo",
        keepStill: "Mantenha o rosto parado",
      },
      options: {
        width: "100vw",
        height: "100vh",
        modelsDirectory: "/libs/sdk-biopass/models",
        cameraPresets: {
          aspectRatio: 4/3,
          preferredResolution: 720,
        },
        mask: {
          enabled: true,
        },
        faceDetection: {
          enabled: true,
          autoCapture: true,
          timeToCapture: 1000,//ms
          scoreThreshold: 0.7,
          timeToCaptureFeedbackColor: "#00FF00"
        },
        backButton: {
          enabled: false,
        },
        switchButton: {
          enabled: false,
        },
        captureButton: {
          enabled: true,
          backgroundColor: "#FFFFFF",
          icon: {
            enabled: true,
            source: "",
            color: "#000000",
            size: "30px"
          }
        },
        legend: {
          title: {
            enabled: true,
            content: "Aloha ID",
          },
          subtitle: {
            enabled: true,
            content: message,
            fontSize: "20px",
          }
        },
      },
    });

    if ($('.modal-backdrop').length > 0) {
      $('.modal-backdrop').css('display', 'block');
    };

    img = resp.base64.replace('data:image/png;base64,', '')
    $('#aloha-id-img').val(img);
    document.dispatchEvent(new Event('aloha-id-captured'));

    stopCamera();
  }

  //? Função para desativar a câmera
  function stopCamera() {
    $('main').css('display', 'block');
    alohaId.style.display = 'none';
  }

};