// WhisperX CLI Options

/** Available Whisper model names */
export type WhisperXModel = 
  | 'tiny.en' | 'tiny'
  | 'base.en' | 'base'
  | 'small.en' | 'small'
  | 'medium.en' | 'medium'
  | 'large-v1' | 'large-v2' | 'large-v3' | 'large'
  | 'distil-large-v2' | 'distil-medium.en' | 'distil-small.en' | 'distil-large-v3'
  | 'large-v3-turbo' | 'turbo';

/** Language codes and full names supported by WhisperX for transcription and translation */
export type WhisperXLanguage = 
  | 'af' | 'am' | 'ar' | 'as' | 'az' | 'ba' | 'be' | 'bg' | 'bn' | 'bo' | 'br' | 'bs' 
  | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fa' | 'fi' 
  | 'fo' | 'fr' | 'gl' | 'gu' | 'ha' | 'haw' | 'he' | 'hi' | 'hr' | 'ht' | 'hu' | 'hy' 
  | 'id' | 'is' | 'it' | 'ja' | 'jw' | 'ka' | 'kk' | 'km' | 'kn' | 'ko' | 'la' | 'lb' 
  | 'ln' | 'lo' | 'lt' | 'lv' | 'mg' | 'mi' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'mt' 
  | 'my' | 'ne' | 'nl' | 'nn' | 'no' | 'oc' | 'pa' | 'pl' | 'ps' | 'pt' | 'ro' | 'ru' 
  | 'sa' | 'sd' | 'si' | 'sk' | 'sl' | 'sn' | 'so' | 'sq' | 'sr' | 'su' | 'sv' | 'sw' 
  | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tl' | 'tr' | 'tt' | 'uk' | 'ur' | 'uz' | 'vi' 
  | 'yi' | 'yo' | 'yue' | 'zh'
  | 'Afrikaans' | 'Albanian' | 'Amharic' | 'Arabic' | 'Armenian' | 'Assamese'
  | 'Azerbaijani' | 'Bashkir' | 'Basque' | 'Belarusian' | 'Bengali' | 'Bosnian'
  | 'Breton' | 'Bulgarian' | 'Burmese' | 'Cantonese' | 'Castilian' | 'Catalan'
  | 'Chinese' | 'Croatian' | 'Czech' | 'Danish' | 'Dutch' | 'English' | 'Estonian'
  | 'Faroese' | 'Finnish' | 'Flemish' | 'French' | 'Galician' | 'Georgian' | 'German'
  | 'Greek' | 'Gujarati' | 'Haitian' | 'Haitian Creole' | 'Hausa' | 'Hawaiian'
  | 'Hebrew' | 'Hindi' | 'Hungarian' | 'Icelandic' | 'Indonesian' | 'Italian'
  | 'Japanese' | 'Javanese' | 'Kannada' | 'Kazakh' | 'Khmer' | 'Korean' | 'Lao'
  | 'Latin' | 'Latvian' | 'Letzeburgesch' | 'Lingala' | 'Lithuanian' | 'Luxembourgish'
  | 'Macedonian' | 'Malagasy' | 'Malay' | 'Malayalam' | 'Maltese' | 'Maori'
  | 'Marathi' | 'Moldavian' | 'Moldovan' | 'Mongolian' | 'Myanmar' | 'Nepali'
  | 'Norwegian' | 'Nynorsk' | 'Occitan' | 'Panjabi' | 'Pashto' | 'Persian'
  | 'Polish' | 'Portuguese' | 'Punjabi' | 'Pushto' | 'Romanian' | 'Russian'
  | 'Sanskrit' | 'Serbian' | 'Shona' | 'Sindhi' | 'Sinhala' | 'Sinhalese'
  | 'Slovak' | 'Slovenian' | 'Somali' | 'Spanish' | 'Sundanese' | 'Swahili'
  | 'Swedish' | 'Tagalog' | 'Tajik' | 'Tamil' | 'Tatar' | 'Telugu' | 'Thai'
  | 'Tibetan' | 'Turkish' | 'Turkmen' | 'Ukrainian' | 'Urdu' | 'Uzbek'
  | 'Valencian' | 'Vietnamese' | 'Welsh' | 'Yiddish' | 'Yoruba';

/** Compute type for inference */
export type WhisperXComputeType = 'float16' | 'float32' | 'int8';

/** Available output formats for the transcription */
export type WhisperXOutputFormat = 'all' | 'srt' | 'vtt' | 'txt' | 'tsv' | 'json' | 'aud';

/** Task type for processing the audio */
export type WhisperXTask = 
  /** Perform X->X speech recognition */
  | 'transcribe' 
  /** Perform X->English translation */
  | 'translate';

/** Method to assign timestamps to non-aligned words, or merge them into neighbouring */
export type WhisperXInterpolateMethod = 'nearest' | 'linear' | 'ignore';

/** Resolution for segmenting the transcription */
export type WhisperXSegmentResolution = 'sentence' | 'chunk';

export interface WhisperXOptions {
  /** Name of the Whisper model to use (default: small) */
  model?: WhisperXModel;
  /** Path to save model files; uses ~/.cache/whisper by default */
  model_dir?: string;
  /** Device to use for PyTorch inference (default: cpu) */
  device?: string;
  /** Device index to use for FasterWhisper inference (default: 0) */
  device_index?: number;
  /** Preferred batch size for inference (default: 8) */
  batch_size?: number;
  /** Compute type for computation (default: float16) */
  compute_type?: WhisperXComputeType;
  /** Directory to save the outputs (default: .) */
  output_dir?: string;
  /** Format of the output file; if not specified, all available formats will be produced */
  output_format?: WhisperXOutputFormat;
  /** Whether to print out the progress and debug messages (default: True) */
  verbose?: boolean;
  /** Whether to perform X->X speech recognition ('transcribe') or X->English translation ('translate') */
  task?: WhisperXTask;
  /** Language spoken in the audio, specify None to perform language detection */
  language?: WhisperXLanguage;
  /** Name of phoneme-level ASR model to do alignment */
  align_model?: string;
  /** For word .srt, method to assign timestamps to non-aligned words, or merge them into neighbouring */
  interpolate_method?: WhisperXInterpolateMethod;
  /** Do not perform phoneme alignment */
  no_align?: boolean;
  /** Return character-level alignments in the output json file */
  return_char_alignments?: boolean;
  /** Onset threshold for VAD (see pyannote.audio), reduce this if speech is not being detected */
  vad_onset?: number;
  /** Offset threshold for VAD (see pyannote.audio), reduce this if speech is not being detected */
  vad_offset?: number;
  /** Chunk size for merging VAD segments. Default is 30, reduce this if the chunk is too long */
  chunk_size?: number;
  /** Apply diarization to assign speaker labels to each segment/word */
  diarize?: boolean;
  /** Minimum number of speakers to in audio file */
  min_speakers?: number;
  /** Maximum number of speakers to in audio file */
  max_speakers?: number;
  /** Temperature to use for sampling */
  temperature?: number;
  /** Number of candidates when sampling with non-zero temperature */
  best_of?: number;
  /** Number of beams in beam search, only applicable when temperature is zero */
  beam_size?: number;
  /** Optional patience value to use in beam decoding, as in https://arxiv.org/abs/2204.05424, the default (1.0) is equivalent to conventional beam search */
  patience?: number;
  /** Optional token length penalty coefficient (alpha) as in https://arxiv.org/abs/1609.08144, uses simple length normalization by default */
  length_penalty?: number;
  /** Comma-separated list of token ids to suppress during sampling; '-1' will suppress most special characters except common punctuations */
  suppress_tokens?: string;
  /** Whether to suppress numeric symbols and currency symbols during sampling, since wav2vec2 cannot align them correctly */
  suppress_numerals?: boolean;
  /** Optional text to provide as a prompt for the first window */
  initial_prompt?: string;
  /** If True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop */
  condition_on_previous_text?: boolean;
  /** Whether to perform inference in fp16; True by default */
  fp16?: boolean;
  /** Temperature to increase when falling back when the decoding fails to meet either of the thresholds below */
  temperature_increment_on_fallback?: number;
  /** If the gzip compression ratio is higher than this value, treat the decoding as failed */
  compression_ratio_threshold?: number;
  /** If the average log probability is lower than this value, treat the decoding as failed */
  logprob_threshold?: number;
  /** If the probability of the <|nospeech|> token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence */
  no_speech_threshold?: number;
  /** (not possible with --no_align) The maximum number of characters in a line before breaking the line */
  max_line_width?: number;
  /** (not possible with --no_align) The maximum number of lines in a segment */
  max_line_count?: number;
  /** (not possible with --no_align) Underline each word as it is spoken in srt and vtt */
  highlight_words?: boolean;
  /** (not possible with --no_align) The maximum number of characters in a line before breaking the line */
  segment_resolution?: WhisperXSegmentResolution;
  /** Number of threads used by torch for CPU inference; supercedes MKL_NUM_THREADS/OMP_NUM_THREADS */
  threads?: number;
  /** Hugging Face Access Token to access PyAnnote gated models */
  hf_token?: string;
  /** If True, progress will be printed in transcribe() and align() methods */
  print_progress?: boolean;
}

// WhisperX Transcript Types

/** Word-level information with timing and confidence score */
export interface WhisperXWord {
  /** The transcribed word */
  word: string;
  /** Start time in seconds with millisecond precision (e.g. 1.234) */
  start: number;
  /** End time in seconds with millisecond precision (e.g. 2.345) */
  end: number;
  /** Confidence score for the word transcription (0.0 to 1.0) */
  score: number;
  /** Speaker label when diarization is enabled */
  speaker?: string;
}

/** Segment of transcribed speech with timing and word-level details */
export interface WhisperXSegment {
  /** Start time in seconds with millisecond precision (e.g. 1.234) */
  start: number;
  /** End time in seconds with millisecond precision (e.g. 2.345) */
  end: number;
  /** Transcribed text for the segment */
  text: string;
  /** Word-level timing and confidence information */
  words?: WhisperXWord[];
  /** Speaker label when diarization is enabled */
  speaker?: string;
}

/** Complete transcript output from WhisperX */
export interface WhisperXTranscript {
  /** Array of transcribed segments */
  segments: WhisperXSegment[];
  /** Flattened array of all words with timing information */
  word_segments?: WhisperXWord[];
  /** Detected or specified language of the audio */
  language: string;
} 
